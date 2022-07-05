import { useState } from "react"

export default function Contact() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors: any = {}
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors["email"] = true
      isValid = false
    }
    if (msg.length <= 0) {
      tempErrors["msg"] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log("errors", errors)
    return isValid
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    let isValidForm = handleValidation()
    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("api/sendgrid", {
        body: JSON.stringify({
          email, fullname, msg
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      const { error } = await res.json()
      if (error) {
        console.error(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Send")
        return
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, msg)
  }

  return (<div className="d-flex justify-content-center align-items-center w-100">
    <form onSubmit={handleSubmit} className="roundcorners bg-secondary bg-gradient text-white p-2">
      <h1 className="text-center">Mail me some message!</h1>

      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">Full name</label>
        <input type="text" name="fullname" className="form-control" value={fullname} onChange={(e) => { setFullname(e.target.value) }} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">E-mail *</label>
        <input type="email" name="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message *</label>
        <textarea name="message" className="form-control" value={msg} onChange={(e) => { setMsg(e.target.value) }}></textarea>
      </div>
      <button className="btn btn-light text-secondary float-end">Send</button>
    </form>
  </div>
  )
}