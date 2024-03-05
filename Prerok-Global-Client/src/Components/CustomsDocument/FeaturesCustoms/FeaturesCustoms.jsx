import React from 'react'
import { TbTargetArrow } from "react-icons/tb";
import { GiStopwatch } from "react-icons/gi";
import { MdOutlineDocumentScanner } from "react-icons/md";

const FeaturesCustoms = () => {
    return (
        <div className="px-4 py-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-bold">
                        Let us help you determine which shipping documents you require
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Completing all documentation correctly will help you to avoid customs delays. <br />
                        See below types of goods movements Easy Customs can provide documentation for.
                    </p>
                </div>
                <div className="grid gap-5 row-gap-5 grid-cols-2">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-amber-500 text-3xl">
                            <TbTargetArrow />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Effective</h6>
                        <p className="text-sm text-gray-700">
                            Get access to a team of experts who will share their expertise with you on compliance issues, resource allocation and overall efficiency.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-amber-500 text-3xl">
                            <GiStopwatch />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Efficient</h6>
                        <p className="text-sm text-gray-700">
                            Our experts will review your supply chain process and provide recommendations on your supply chain strategy so it all comes together seamlessly.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-amber-500 text-3xl">
                            <MdOutlineDocumentScanner />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Compliant</h6>
                        <p className="text-sm text-gray-700">
                            Make sure your supply chain is always up to date regarding regulatory compliance with Revenue in Ireland or HMRC in the UK in order to avoid unnecessary penalties.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesCustoms