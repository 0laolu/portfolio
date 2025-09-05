import memoji from '../../assets/memoji.jpeg'

export default function AboutImage() {
    return (
        <figure className="about-image">
            <img className="w-[480px]" src={memoji} alt="" />
        </figure>
    )
}