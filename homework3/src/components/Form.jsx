export const Form = ({ data, setData, setMessage }) => {

    const { author, text } = data;

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (text.length > 0) {
            setMessage(prevsate => {
                console.log(prevsate);
                return [...prevsate, { author, text }]
            })
        }
        setData(
            {
                author: '',
                text: ''
            }
        )
    }

    return (
        <form className="form-submit" onSubmit={handleSubmit}>
            <h3>Форма для отправки сообщения:</h3>
            <p>Автор:</p>
            <input placeholder="Имя" value={author} onChange={(e) => setData(
                prevsate => ({ ...prevsate, author: e.target.value })
            )} />
            <p>Текст:</p>
            <input placeholder="Текст" value={text} onChange={(e) => setData(
                prevsate => ({ ...prevsate, text: e.target.value })
            )} />
            <button type="submit">Отправить</button>
        </form>
    )
}