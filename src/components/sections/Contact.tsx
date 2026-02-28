import React, { useState } from 'react'

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

  // Validation de l'email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validation du formulaire
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
    // Efface l'erreur du champ quand l'utilisateur commence à taper
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      // Ici tu ajouteras l'appel API plus tard
      console.log('Formulaire soumis:', formData)
      
      // Simulation d'envoi
      setTimeout(() => {
        setIsSubmitting(false)
        alert('Message envoyé avec succès!')
        // Réinitialiser le formulaire
        setFormData({
          email: '',
          service: '',
          description: ''
        })
      }, 1000)
    }
  }

  return (
    <section 
      id='contact' 
      className='w-full bg-black text-white py-16 md:py-24'
      aria-label="Section contact"
    >
      <div className="align-element">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-400 mt-4">
            Discutons de votre projet ensemble
          </p>
        </div>

        {/* Formulaire */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 rounded-lg bg-white/10 border 
                  focus:outline-none focus:ring-2 focus:ring-primary
                  ${errors.email ? 'border-red-500' : 'border-white/20'}
                `}
                placeholder="votre@email.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Champ Service (sélecteur) */}
            <div>
              <label 
                htmlFor="service" 
                className="block text-sm font-medium mb-2"
              >
                Que pouvons-nous faire pour vous ? <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`
                  w-full px-4 py-3 rounded-lg bg-white/10 border
                  focus:outline-none focus:ring-2 focus:ring-primary
                  ${errors.service ? 'border-red-500' : 'border-white/20'}
                `}
                disabled={isSubmitting}
              >
                <option value="" className="bg-gray-800">Sélectionnez un service</option>
                <option value="informatique" className="bg-gray-800">Service Informatique</option>
                <option value="oratoire" className="bg-gray-800">Service Art Oratoire</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-500">{errors.service}</p>
              )}
            </div>

            {/* Champ Description */}
            <div>
              <label 
                htmlFor="description" 
                className="block text-sm font-medium mb-2"
              >
                Décrivez votre projet <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className={`
                  w-full px-4 py-3 rounded-lg bg-white/10 border
                  focus:outline-none focus:ring-2 focus:ring-primary
                  ${errors.description ? 'border-red-500' : 'border-white/20'}
                `}
                placeholder="Parlez-nous de votre projet..."
                disabled={isSubmitting}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">{errors.description}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Minimum 10 caractères
              </p>
            </div>

            {/* Bouton Envoyer */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full py-3 px-6 bg-primary text-white font-medium
                rounded-lg transition-all duration-300
                ${isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-primary/80 hover:scale-[1.02]'
                }
              `}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact