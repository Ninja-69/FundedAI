export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="glass-card p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-2 heading-gradient">FundedAI Terms & Conditions</h1>
        <p className="text-secondary-neutral mb-8 font-mono text-sm">Last Updated: March 5, 2026</p>
        
        <div className="space-y-8 text-secondary-neutral leading-relaxed">
          <p className="text-accent">
            Welcome to FundedAI! These Terms and Conditions ("Terms") govern your use of our mobile application ("App"). By using the App, you agree to be bound by these Terms.
          </p>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the App, you accept and agree to be bound by these Terms. We may update these Terms from time to time, so please review them periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4">2. Use of the App</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-accent">Eligibility:</strong> You must meet the age and legal capacity requirements outlined in Section 6.</li>
              <li><strong className="text-accent">Personal Use:</strong> The App is intended for your personal, non-commercial use.</li>
              <li><strong className="text-accent">User Conduct:</strong> You agree not to use the App in any way that is unlawful, harmful, or violates any applicable laws or regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4">3. User Content</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-accent">Chart Images:</strong> The App allows you to upload images of stock or cryptocurrency charts. These images are processed temporarily and are not available publicly. You retain all rights to the images you upload.</li>
              <li><strong className="text-accent">Responsibility:</strong> You are solely responsible for the content you upload.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4">4. Intellectual Property</h2>
            <p>
              All rights, title, and interest in and to the App, including all intellectual property rights, are owned by FundedAI. You are granted a limited, revocable license to use the App for personal purposes.
            </p>
          </section>

          <section className="p-6 bg-warning/5 border border-warning/20 rounded-xl">
            <h2 className="text-xl font-bold text-warning mb-4">5. No Financial Advice (Important)</h2>
            <p className="text-warning/90">
              The analysis provided by FundedAI is strictly for informational purposes. It does not constitute financial, investment, or trading advice. The App produces predictions based on AI algorithms, which are speculative. Always conduct independent research and consult professionals before making financial decisions. We are not responsible for the accuracy of any insights generated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4">6. Age and Legal Capacity</h2>
            <p>
              To use FundedAI, you must be at least 13 years old. If you are under 18, you may only use the App with parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, FundedAI shall not be liable for any loss of profits, revenues, or data resulting from your use of the App.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h2 className="text-xl font-bold text-accent mb-4">Contact Information</h2>
            <p>
              If you have any questions, please contact us at <a href="mailto:support@fundedai.com" className="text-profit hover:underline">support@fundedai.com</a>.
            </p>
            <p className="mt-4 font-mono text-xs">2026 © FundedAI</p>
          </section>
        </div>
      </div>
    </div>
  );
}
