import memoji from '../../assets/memoji.jpeg'

export default function AboutImage() {
    return (
        <figure className="about-image my-10 lg:my-0">
            <img className="w-9/10 max-w-[470px] mx-auto lg:w-[480px] lg:max-w-none" src={memoji} alt="" />
        </figure>
    )
}