import networkImg from '../../../assets/images/customs/networkGlobe.png';

const AboutCustoms = () => {
    return (
        <div className="px-4 py-16 wrapper lg:py-20">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Why are customs documents
                            <br className="hidden md:block" />
                            jumps over{' '}
                            <span className="inline-block text-amber-400">
                                important ?
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            When goods cross borders, you’re responsible for preparing the customs documentation. <br /> <br />

                            The type of documentation required depends on the type of goods you are exporting/importing, their commercial value and the country/territory of destination. The most commonly required documents are the international air waybill and the commercial invoice, but others can be needed too.
                        </p>
                    </div>
                </div>

                <div>
                    <img
                        className="object-cover rounded lg:h-96 lg:w-96 w-full"
                        src={networkImg}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutCustoms