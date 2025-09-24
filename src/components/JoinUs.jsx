const JoinUs = () => {
  const steps = [
    {
      number: "1",
      title: "Join WhatsApp Group",
      description:
        "Click the button below to join our active WhatsApp community where we share updates, motivation, and coordinate runs.",
      icon: "📱",
    },
    {
      number: "2",
      title: "Attend Saturday Run",
      description:
        "Show up at Copou Park entrance every Saturday at 9 AM. Choose between our 4km or 7km route based on your level.",
      icon: "🏃",
    },
    {
      number: "3",
      title: "Enjoy Coffee Together",
      description:
        "After the run, join us at our partner coffee shops for discounted drinks and great conversations with new friends.",
      icon: "☕",
    },
  ];

  const faqs = [
    {
      question: "Do I need to be an experienced runner?",
      answer:
        "Not at all! We welcome runners of all levels, from complete beginners to marathon veterans. Our 4km route is perfect for newcomers.",
    },
    {
      question: "What should I bring?",
      answer:
        "Just bring yourself, comfortable running shoes, and a water bottle. We recommend dressing according to the weather.",
    },
    {
      question: "Is there a membership fee?",
      answer:
        "NUR is completely free to join! We believe running should be accessible to everyone in our community.",
    },
    {
      question: "What if I can't keep up?",
      answer:
        "No worries! We have pace groups for different speeds, and no one gets left behind. Our community is all about support and encouragement.",
    },
  ];

  return (
    <section id="join" className="py-20 bg-nur-gray">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nur-black mb-8">
            Join <span className="text-nur-orange">NUR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your running journey with Iasi's most welcoming
            community? Here's how to get started.
          </p>
        </div> */}

        {/* Steps to Join */}
        {/* <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-nur-white rounded-2xl p-8 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-nur-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-nur-white font-bold text-xl">
                  {step.number}
                </span>
              </div>

              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-nur-black mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>  */}

        {/* WhatsApp CTA */}
        <div className="bg-nur-white rounded-2xl p-8 max-w-2xl mx-auto text-center shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-nur-black mb-4">
            Ready to Run?
          </h3>
          <p className="text-gray-600 mb-8">
            Join our WhatsApp group now and be part of Iasi's most energetic
            running community. Your first Saturday run is just a click away!
          </p>

          <a
            href="https://wa.me/+40123456789?text=Hi! I'd like to join NUR Running Club"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 hover-lift mb-6"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Join WhatsApp Group
          </a>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Free to join
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              All levels welcome
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Instant community
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-nur-black text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-nur-white rounded-2xl p-6 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-nur-black mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
