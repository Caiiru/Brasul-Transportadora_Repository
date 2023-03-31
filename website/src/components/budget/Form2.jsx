const Form2 = () => {
    return (
        <div>
            <form>
                <div className="brasul__site-budget-card-title">
                    <h2>Email</h2>

                    <input type='text'
                        classname='brasul__site-budget-email'
                        name='name'
                        id='name'
                        size={30}
                        placeholder='Seu Nome'
                        required
                    />
                    <br />
                    <input type='email'
                        name='email'
                        id='email'
                        classname='brasul__site-budget-email'
                        size={30}
                        placeholder='Seu Email'
                        autoComplete="on"
                        required
                    />
                    <br />
                </div>
                <div className="brasul__site-budget-email-description_title">
                    <label>Descreva seu pedido</label>
                    <textarea name='message'
                        className="brasul__site-budget-email-description"
                        id='message'
                        size={30}
                        cols={30}
                        rows='7'
                        maxLength={600}
                        placeholder='Descreva seu pedido'
                        required></textarea>
                </div>
                <br />
                <button
                    className="wppButton"
                    type="submit">Enviar Email</button>
            </form>
        </div>
    );
}

export default Form2;