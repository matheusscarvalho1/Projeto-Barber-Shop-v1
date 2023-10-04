import Image from 'next/image'

export default function Photo ({ image, width, height }) {
    return (
        <>
            <div>
                    <Image src={`/images/${image}`} alt={`${image}`} width={width} height={height} />
            </div>
        </>
    )
}