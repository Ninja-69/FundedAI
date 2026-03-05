export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="glass-card p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-2 heading-gradient">FundedAI Privacy Policy</h1>
        <p className="text-secondary-neutral mb-8 font-mono text-sm">Last Updated: March 5, 2026</p>
        
        <div className="space-y-8 text-secondary-neutral leading-relaxed">
          <p className="text-accent">
            FundedAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by FundedAI.
          </p>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4">Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong className="text-accent">Personal Information:</strong> During the onboarding process, we may ask for your name, trading experience, and market preferences. This information is used solely within the app to personalize your user experience and is not collected or stored for any other purpose.
              </li>
              <li>
                <strong className="text-accent">Chart Images:</strong> FundedAI allows you to upload images of stock or cryptocurrency charts to generate trading insights. These images are processed temporarily to provide analysis and are not stored or shared.
              </li>
              <li>
                <strong className="text-accent">Usage Data:</strong> We may collect information about your use of the app, such as session duration and feature usage, to improve the app and enhance your experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4">Your Choices</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-accent">Personal Information:</strong> Providing preferences is optional, though skipping this may limit personalization.</li>
              <li><strong className="text-accent">Chart Images:</strong> You retain full control. Images are processed in real-time and are not stored on our servers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-accent mb-4">Age Requirements</h2>
            <p>
              FundedAI is not intended for anyone under 13. Users under 18 must have parental consent. FundedAI is not responsible for the use of the app by minors.
            </p>
          </section>

          <section className="pt-8 border-t border-white/5">
            <p className="font-mono text-xs">2026 © FundedAI</p>
          </section>
        </div>
      </div>
    </div>
  );
}
