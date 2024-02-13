// FormComponent.js
import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFcomponent from './PDFcomponent';


const FormComponent = () => {
    const [formData, setFormData] = useState({
        originCountry: '',
        destinationCountry: '',
        shippingFee: ''
    });

    const [costAnalysis, setCostAnalysis] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Retrieve tax and VAT rates based on selected countries
        const originTaxRate = getTaxRate(formData.originCountry);
        const destinationTaxRate = getTaxRate(formData.destinationCountry);

        // Calculate customs cost
        const shippingFee = parseFloat(formData.shippingFee);
        const dischargeCost = shippingFee * 0.1; // 10% for discharge
        const originVAT = shippingFee * originTaxRate;
        const destinationVAT = shippingFee * destinationTaxRate;
        const totalCost = shippingFee + dischargeCost + originVAT + destinationVAT;

        // Prepare data for display
        const analysisData = {
            shippingFee,
            dischargeCost,
            originVAT,
            destinationVAT,
            totalCost
        };

        setCostAnalysis(analysisData);
    };

    // Function to get tax rate based on country
    const getTaxRate = (country) => {
        switch (country) {
            case 'Bangladesh':
                return 0.15; // 15%
            case 'India':
                return 0.18; // 18%
            case 'China':
                return 0.12; // 12%
            case 'USA':
                return 0.2; // 20%
            case 'UK':
                return 0.25; // 25%
            default:
                return 0; // Default to 0 if country is not found
        }
    };

    const makePDF = () => (
        <PDFDownloadLink document={<PDFcomponent data={costAnalysis} />} fileName="customs_cost_analysis.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
    );

    return (
        <div className='max-w-screen-2xl p-7 mx-auto flex justify-around gap-12 items-center'>
            <div className='w-1/3'>
                <h2 className='text-center text-3xl text-amber-500 font-bold mb-12'>Customs Cost Calculator</h2>
                <form onSubmit={handleSubmit}>
                    <div className=''>
                        <label className='text-lg font-bold' htmlFor="originCountry">Origin Country:</label>
                        <select
                            id="originCountry"
                            name="originCountry"
                            value={formData.originCountry}
                            onChange={handleChange}
                            className='mb-6 p-2 text-amber-600 rounded-lg ml-4'
                        >
                            <option disabled selected>Origin</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                    <div className='mb-6'>
                        <label className='text-lg font-bold' htmlFor="destinationCountry">Destination Country:</label>
                        <select
                            id="destinationCountry"
                            name="destinationCountry"
                            value={formData.destinationCountry}
                            onChange={handleChange}
                            className='mb-4 p-2 text-amber-600 rounded-lg ml-4'
                        >
                            <option value="">Destination</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                    <div className='mb-10'>
                        <label className='text-lg font-bold' htmlFor="shippingFee">Shipping Fee($):</label>
                        <input
                            type="number"
                            id="shippingFee"
                            name="shippingFee"
                            value={formData.shippingFee}
                            onChange={handleChange}
                            className='mb-6 p-2 rounded-lg ml-4 border-2 border-amber-500'
                            placeholder="Enter Shipping Fee"
                        />
                    </div>
                    <button type="submit" className='btn btn-warning text-white text-lg w-full'>Calculate</button>
                </form>
            </div>
            <div>
                {costAnalysis && (
                    <div className='w-full'>
                        <h2 className='text-2xl font-bold text-center mb-8'>Customs Cost Analysis</h2>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Details</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Shipping Fee</td>
                                        <td>${costAnalysis.shippingFee.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Discharge Cost (10%)</td>
                                        <td>${costAnalysis.dischargeCost.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Storage VAT</td>
                                        <td>${costAnalysis.originVAT.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>Port VAT</td>
                                        <td>${costAnalysis.destinationVAT.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th className='font-bold'>5</th>
                                        <td className=' font-bold text-red-500'>Total Cost</td>
                                        <td className='font-bold text-red-500'>${costAnalysis.totalCost.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <button className='btn w-full bg-amber-500 text-gray-100 text-lg' onClick={makePDF}>Make PDF</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormComponent;
