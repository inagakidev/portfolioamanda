import styles from './Form.module.css'

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    let newErrors = {};

    if (!form.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "E-mail inválido";
    }

    if (form.mensagem.length < 10) {
      newErrors.mensagem = "Mensagem muito curta";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    emailjs
      .send(
        "service_w0vuko4",
        "template_73995wf",
        {
          name: form.nome,
          email: form.email,
          message: form.mensagem,
        },
        "MaGDhKCwJ6mg6MjMI"
      )
      .then(() => {
        setSuccess(true);
        setForm({ nome: "", email: "", mensagem: "" });
      })
      .catch(() => {
        alert("Erro ao enviar mensagem");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Seu nome"
        />
        {errors.nome && <span>{errors.nome}</span>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="voce@gmail.com"
        />
        {errors.email && <span>{errors.email}</span>}

        <label>Mensagem</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Conte-me sobre seu projeto..."
        />
        {errors.mensagem && <span>{errors.mensagem}</span>}

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : " Enviar mensagem"}
        </button>

        {success && <p>Mensagem enviada com sucesso!</p>}
      </form>
    </div>
  );
}