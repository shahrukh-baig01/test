import { PageHero } from '../lib/primitives'
import { SITE } from '../data/site'

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Naseeha Foundation" title="Privacy Policy" />

      <section className="section">
        <div className="wrap">
          <div className="prose">
            <h2>1. Introduction</h2>
            <p>This privacy policy (“Privacy Policy”) applies to the collection and processing of personal data (“Personal Data”) by Naseeha Foundation (also operating as Naseeha Institute) (“we”, “us” or “our”) in connection with our website naseeha.live and our related platforms, including courses.naseeha.live and donate.naseeha.live (together, the “website”). This Privacy Policy will help you understand how we collect and use your Personal Data and what we do with it.</p>
            <p>Naseeha Foundation is a non-profit, non-political educational organization dedicated to reviving Islamic learning and scholarship. By visiting our website, enrolling in a course, making a donation, subscribing to our updates, or otherwise interacting with us, you agree to us handling your Personal Data in accordance with this Privacy Policy.</p>

            <h2>2. Personal data that we collect</h2>
            <p>Personal Data includes any information about an individual from which that person can be identified. It does not include Personal Data where the identity has been removed (anonymous data). Information you may provide to us, or that we may collect, includes:</p>
            <ul>
              <li>Contact data, such as your first and last name, email address, postal or billing address and phone number.</li>
              <li>Account data, such as the username and password that you may set to establish an online account with us on our website or on our learning platform (courses.naseeha.live).</li>
              <li>Enrollment and application data, such as the information you provide when applying for or registering for our courses, programs and events (for example AISL, AQS, ISD and intensives).</li>
              <li>Donation and transactional data, such as information relating to or needed to complete donations and payments made through our website (including donate.naseeha.live), such as amounts, transaction references and payment history. We do not store full card or bank details; these are handled by our payment providers.</li>
              <li>Communications that we exchange with you, including when you contact us with questions, feedback or requests through the website, email, phone, WhatsApp or social media (including Facebook, Instagram, YouTube and LinkedIn).</li>
              <li>Technical and usage data, such as your IP address, browser type, device information, pages viewed and how you use our website. We collect some of this automatically through cookies and similar technologies, including Google Tag Manager and the Meta (Facebook) Pixel.</li>
            </ul>

            <h2>3. How we use your Personal Data</h2>
            <p>We use your Personal Data to: provide you with the courses, programs, events, services and resources that you register for or request; process and acknowledge donations and issue receipts where applicable; create and manage your account and respond to your questions or requests; improve our operations, content and website layout; send you newsletters, announcements and updates about our lectures, workshops, courses and events, where you have chosen to receive them; prevent, detect and manage risk against fraud and illegal activities; comply with our financial, regulatory, accounting and other legal obligations; and resolve any disputes that may arise.</p>

            <h2>4. Who do we share your Personal Data with?</h2>
            <p>To enable us to provide our services to you, we may share your information with trusted third parties. These may include payment processors and financial institutions (for example, banks and payment method providers) when processing donations and payments, our learning-management and website hosting providers, email and communication service providers, and analytics providers such as Google and Meta.</p>
            <p>We only share Personal Data where it is necessary to provide our products and services, to comply with a legal obligation, or where you have directly authorized the disclosure. We do not sell your Personal Data.</p>

            <h2>5. How we protect your Personal Data</h2>
            <p>We make reasonable efforts to ensure a level of security appropriate to the risk associated with the processing of Personal Data. We implement access control measures (physical and virtual), security protocols, policies and standards designed to keep our security infrastructure in line with reasonable industry standards, and we maintain organizational, technical and administrative measures designed to protect Personal Data against unauthorized access, destruction, loss, alteration or misuse. We have also put in place procedures to deal with any suspected Personal Data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>

            <h2>6. How long do we store your information?</h2>
            <p>We will only retain your Personal Data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, accounting or reporting requirements, carrying out legal work, or the establishment or defence of legal claims. We will retain your information for as long as your account is active or as needed to provide you with our services, comply with our legal and statutory obligations, or verify your information with a financial institution.</p>

            <h2>7. Cookies and tracking technologies</h2>
            <p>Our website uses cookies and similar technologies (including Google Tag Manager and the Meta Pixel) to help the website function, to understand how it is used, and to measure the effectiveness of our communications and campaigns. Most browsers allow you to refuse or delete cookies through their settings; however, some parts of the website may not function properly if you disable them.</p>

            <h2>8. Your rights</h2>
            <p>Subject to applicable law, you may have the right to request access to the Personal Data we hold about you, to request correction of inaccurate data, to request deletion of your data, to object to or restrict certain processing, and to withdraw consent (for example, to unsubscribe from our newsletters) at any time. You can unsubscribe using the link in our emails or by contacting us using the details below. We will respond to your request in accordance with applicable law.</p>

            <h2>9. Children's privacy</h2>
            <p>Where our programs or services involve minors, we collect Personal Data relating to a minor only with the involvement or consent of a parent or guardian, and we use that information solely for the purpose of providing the relevant program or service.</p>

            <h2>10. Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational or regulatory reasons. The updated version will be indicated by a revised “Last updated” date at the top of this policy and will be effective as soon as it is published on our website.</p>

            <h2>11. How to contact us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your Personal Data, please contact us:</p>
            <p>
              Naseeha Foundation<br />
              {SITE.address}, Pakistan<br />
              Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
              Phone / WhatsApp: {SITE.phone}<br />
              Website: naseeha.live
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
