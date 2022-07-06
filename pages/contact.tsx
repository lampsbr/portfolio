import { useState } from "react"
import { Toast, ToastContainer } from "react-bootstrap";

type MailErrors = {
  email?: boolean,
  msg?: boolean
}

export default function Contact() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [errors, setErrors] = useState<MailErrors>({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const closeMessages = () => {
    setShowSuccessMessage(false)
    setShowFailureMessage(false)
  }

  const handleValidation = () => {
    let tempErrors: any = {}
    let isValid = true

    if (email.length <= 0) {
      tempErrors["email"] = true
      isValid = false
    }
    if (msg.length <= 0) {
      tempErrors["msg"] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    //console.log("errors", errors)
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
      setFullname('')
      setEmail('')
      setMsg('')
    } else {
      console.error(errors)
    }
    //console.log(fullname, email, msg)
  }

  return (<>
    <div className="d-flex justify-content-center align-items-center w-100">
      <form onSubmit={handleSubmit} className="roundcorners bg-secondary bg-gradient text-white p-2">
        <h1 className="text-center">Mail me some message!</h1>

        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">Full name</label>
          <input type="text" name="fullname" className="form-control" value={fullname} onChange={(e) => { setFullname(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail *</label>
          <input type="email" name="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          {errors.email && <div className="form-text text-white w-75">E-mail field is mandatory =)</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message *</label>
          <textarea name="message" className="form-control" value={msg} onChange={(e) => { setMsg(e.target.value) }}></textarea>
          {errors.msg && <div className="form-text text-white">Please say hi! I like when people say hi</div>}
        </div>
        <button className="btn btn-light text-secondary float-end">{buttonText}</button>
      </form>
    </div>
    <ToastContainer position="top-end" className="m-2">
      <Toast show={showSuccessMessage} onClose={closeMessages} delay={4000} autohide bg="success">
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Your message was successfully sent.</Toast.Body>
      </Toast>
      <Toast show={showFailureMessage} onClose={closeMessages} delay={7000} autohide bg="warning">
        <Toast.Header>
          <strong className="me-auto">Oops</strong>
        </Toast.Header>
        <Toast.Body>Message could not be sent. Looks like this developer didn setup this page correctly. Could you please warn him on Twitter or Linkedin? Thank you so much!</Toast.Body>
      </Toast>
    </ToastContainer>
  </>
  )
}