


function ImgFrame(props) {
    return (
        <div className="w-1/3">
                <img src={props.src} className="w-full h-64 object-cover mb-6 rounded-2xl" alt={props.title} />
                <div>
                    <h1 className="font-semibold text-lg mb-2">{props.title}</h1>
                    <p className="text-sm">{props.description}</p>
                    <p className="font-bold text-3xl">{props.price}</p>
                </div>
        </div>
    )
}


export default ImgFrame;