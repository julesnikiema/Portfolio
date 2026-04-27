import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

interface FormData {
  email: string
  service: string
  description: string
}

interface FormErrors {
  email?: string
  service?: string
  description?: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    service: '',
    description: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validation form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = "L'email est obligatoire"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide"
    }

    if (!formData.service) {
      newErrors.service = "Veuillez sélectionner un service"
    }

    if (!formData.description) {
      newErrors.description = "Veuillez décrire votre projet"
    } else if (formData.description.length < 10) {
      newErrors.description = "La description doit faire au moins 10 caractères"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  // 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        email: formData.email,
        service: formData.service,
        description: formData.description,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Message envoyé avec succès! ✅')

      setFormData({
        email: '',
        service: '',
        description: ''
      })
    })
    .catch(() => {
      alert('Erreur lors de l’envoi ❌')
    })
    .finally(() => {
      setIsSubmitting(false)
    })

    
  }

  return (
    <section
      id='contact'
      className='w-full bg-black text-white py-16 md:py-24'
      aria-label="Section contact"
    >
      <div className="align-element">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-400 mt-4">
            Discutons de votre projet ensemble
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* SERVICE */}
            <div>
              <label className="block text-sm mb-2">
                Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10"
                disabled={isSubmitting}
              >
                <option value="">Sélectionnez un service</option>
                <option value="informatique">Service Informatique</option>
                <option value="oratoire">Service Art Oratoire</option>
              </select>

              {errors.service && (
                <p className="text-red-500 text-sm">{errors.service}</p>
              )}
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-sm mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10"
                disabled={isSubmitting}
              />

              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-primary rounded-lg"
            >
              {isSubmitting ? 'Envoi...' : 'Envoyer'}
            </button>

          </form>
        </div>
      </div>
    
    </section>
  )
}

export default Contact