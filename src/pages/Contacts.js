const Contacts = () => {
    return (
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Ulyanovsk, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79626300964">+7 (962) 630-09-64</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:tires2funks@gmail.com">tires2funks@gmail.com</a></p>
                    </li>
                </ul>
        </div>
        </main>
      );
}
 
export default Contacts;