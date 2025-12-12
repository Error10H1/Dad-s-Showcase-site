/* ==========================================
   INSPIRATION PAGE
   Add inspiring projects, case studies, or portfolio items
   ========================================== */

function Inspiration() {

    /* EDIT: Add your inspiration items here */
    const inspirationItems = [
        {
            title: "Innovative Project",
            description: "An example of innovative work that showcases creativity and skill",
            image: "https://via.placeholder.com/400x300/e67e22/ffffff?text=Innovation"
        },
        {
            title: "Award Winning Design",
            description: "A project that received recognition for outstanding quality",
            image: "https://via.placeholder.com/400x300/8e44ad/ffffff?text=Award+Winner"
        },
        {
            title: "Client Favorite",
            description: "One of our most popular projects with exceptional client satisfaction",
            image: "https://via.placeholder.com/400x300/16a085/ffffff?text=Client+Favorite"
        },
        {
            title: "Technical Excellence",
            description: "A project demonstrating advanced technical capabilities",
            image: "https://via.placeholder.com/400x300/c0392b/ffffff?text=Technical"
        },
        {
            title: "Creative Solution",
            description: "Unique approach to solving complex client challenges",
            image: "https://via.placeholder.com/400x300/2980b9/ffffff?text=Creative"
        },
        {
            title: "Industry Leading",
            description: "Setting new standards in the industry with this work",
            image: "https://via.placeholder.com/400x300/27ae60/ffffff?text=Leading"
        }
    ];

    return (
        <>
            {/* Page Header */}
            <section className="hero">
                <h1>Inspiration Gallery</h1>
                <p>Explore our best work and get inspired by what's possible</p>
            </section>

            {/* Inspiration Grid */}
            <section className="section">
                <div className="card-grid">
                    {inspirationItems.map((item, index) => (
                        <div className="card" key={index}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-image"
                            />
                            <div className="card-content">
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Inspiration;
