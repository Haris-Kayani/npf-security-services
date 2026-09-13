import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "@phosphor-icons/react";
import styles from "./inquiry.module.css";

type InquiryDialogProps = {
  onDismiss: () => void;
};

type InquiryPreview = {
  name: string;
  email: string;
  city: string;
  message: string;
};

export function InquiryDialog({ onDismiss }: InquiryDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const [preview, setPreview] = useState<InquiryPreview | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  useEffect(() => {
    if (preview) {
      dialogRef.current?.scrollTo({ top: 0 });
      resultHeadingRef.current?.focus({ preventScroll: true });
    }
  }, [preview]);

  function showPreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    for (const fieldName of ["name", "message"]) {
      const field = form.elements.namedItem(fieldName) as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(field.value.trim() ? "" : "Please enter more than spaces.");
      if (!field.reportValidity()) return;
    }

    const data = new FormData(form);
    setPreview({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      city: String(data.get("city") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    });
  }

  function editPreview() {
    setPreview(null);
    requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLInputElement>("input")?.focus();
    });
  }

  return (
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      aria-labelledby="inquiry-title"
      aria-describedby="inquiry-description"
      onClose={onDismiss}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <div className={styles.dialogInner}>
        <div className={styles.dialogHeader}>
          <span className="eyebrow">NPF Security Services</span>
          <button
            className={styles.closeButton}
            type="button"
            aria-label="Close inquiry"
            onClick={() => dialogRef.current?.close()}
          >
            <XIcon size={23} aria-hidden="true" />
          </button>
        </div>
        <h2 id="inquiry-title">Request an assessment</h2>
        <p id="inquiry-description" className={styles.introduction}>
          Tell us about your location and the support you need.
        </p>
        <p className={styles.previewNotice}>
          <strong>Form preview.</strong> Details stay in this browser tab. No request will be sent.
        </p>

        <form
          ref={formRef}
          onSubmit={showPreview}
          hidden={preview !== null}
          className={styles.form}
        >
          <p className={styles.requiredNote}>All fields are required unless marked optional.</p>
          <div className={styles.field}>
            <label htmlFor="inquiry-name">Your name</label>
            <input
              id="inquiry-name"
              name="name"
              autoComplete="name"
              maxLength={100}
              required
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="inquiry-email">Email address</label>
            <input
              id="inquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="inquiry-city">
              City / location <span>(optional)</span>
            </label>
            <input id="inquiry-city" name="city" autoComplete="address-level2" maxLength={120} />
          </div>
          <div className={styles.field}>
            <label htmlFor="inquiry-message">What support do you need?</label>
            <textarea
              id="inquiry-message"
              name="message"
              rows={4}
              maxLength={1500}
              required
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </div>
          <button className="button button-primary" type="submit">
            Preview inquiry <ArrowRightIcon size={22} aria-hidden="true" />
          </button>
        </form>

        {preview && (
          <section className={styles.result} aria-labelledby="preview-result-title">
            <h3 id="preview-result-title" ref={resultHeadingRef} tabIndex={-1}>
              Your inquiry preview is ready.
            </h3>
            <p>
              No request has been sent. Live delivery will be added after the company confirms its
              inquiry recipient.
            </p>
            <dl>
              <div>
                <dt>Name</dt>
                <dd>{preview.name}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{preview.email}</dd>
              </div>
              {preview.city && (
                <div>
                  <dt>Location</dt>
                  <dd>{preview.city}</dd>
                </div>
              )}
              <div>
                <dt>Requirements</dt>
                <dd className={styles.message}>{preview.message}</dd>
              </div>
            </dl>
            <button className="text-link" type="button" onClick={editPreview}>
              <ArrowLeftIcon size={20} aria-hidden="true" /> Edit details
            </button>
          </section>
        )}
      </div>
    </dialog>
  );
}
