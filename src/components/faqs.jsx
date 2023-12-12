function Faqs() {
    const faqItems = [
        {
            id: 1,
            question: 'What is React?',
            answer:
                'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components that manage their state efficiently.'
        },
        {
            id: 2,
            question: 'What are the key features of React?',
            answer:
                'React comes with features like virtual DOM for optimal performance, component-based architecture, JSX for writing components, and a unidirectional data flow.'
        },
        {
            id: 3,
            question: 'How do you create components in React?',
            answer:
                'Components can be created as classes or functions. With functional components, you can use hooks like useState and useEffect to manage state and side effects.'
        }
    ];

    return (
        <>
            <div>
                <div className="accordion" id="faqAccordion">
                    {faqItems.map(item => (
                        <div className="accordion-item" key={item.id}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#faqCollapse${item.id}`}
                                    aria-expanded="false"
                                    aria-controls={`faqCollapse${item.id}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`faqCollapse${item.id}`}
                                className="accordion-collapse collapse"
                            >
                                <div className="accordion-body">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Faqs;