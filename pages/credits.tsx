import Link from "next/link";

export default function Credits() {
  return (
    <div style={{padding: "1rem"}}>
      <h2 style={{textAlign: "center"}}>Credits page</h2>
      <br></br>
      <p>I&apos;m proud to use these free and open source technologies for my portfolio page:</p>
      <ul>
        <li>NextJS</li>
        <li>React Bootstrap</li>
        <li>Sendgrid</li>
      </ul>
      <p>Guides:</p>
      <ul>
        <li><Link href="https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/">How to Build a Contact Form with SendGrid and Next.js</Link></li>
      </ul>

    </div>
  )
}