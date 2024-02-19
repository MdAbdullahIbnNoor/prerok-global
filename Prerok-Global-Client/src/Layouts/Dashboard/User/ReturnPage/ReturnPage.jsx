import React, { useState } from 'react';

const ReturnPage = () => {
    const [reason, setReason] = useState('');
    const [trackingId, setTrackingId] = useState('');
    const [image, setImage] = useState(null);
    const [refundType, setRefundType] = useState('money');

    const handleReturn = () => {
        // Handle return logic here
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        // Handle file upload logic here
        setImage(file);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-lg my-24 px-4">
            <h1 className="text-2xl font-bold mb-4 text-amber-500">Return Product</h1>
            <div className="mb-4">
                <label htmlFor="reason" className="block font-medium">Reason for Return:</label>
                <select id="reason" value={reason} onChange={(e) => setReason(e.target.value)} className="mt-1 block w-full border-amber-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 p-2">
                    <option value="">Select Reason</option>
                    <option value="Defective">Defective</option>
                    <option value="Wrong item">Wrong Item</option>
                    <option value="Changed mind">Changed Mind</option>
                    <option value="Size too small">Size Too Small</option>
                    <option value="Size too large">Size Too Large</option>
                    <option value="Not as described">Not as Described</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="trackingId" className="block font-medium">Tracking ID:</label>
                <input type="text" id="trackingId" value={trackingId} onChange={(e) => setTrackingId(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 p-2 pl-4" />
            </div>
            <div className="mb-4">
                <label htmlFor="image" className="block font-medium">Upload Image:</label>
                <input type="file" id="image" accept="image/*" onChange={handleImageUpload} className="mt-1 block" />
            </div>
            <div className="mb-4">
                <span className="block font-medium">Refund Type:</span>
                <label className="inline-flex items-center mt-1">
                    <input type="radio" value="money" checked={refundType === 'money'} onChange={() => setRefundType('money')} className="form-radio h-5 w-5 text-amber-600" />
                    <span className="ml-2">Money Back</span>
                </label>
                <label className="inline-flex items-center mt-1 ml-6">
                    <input type="radio" value="replacement" checked={refundType === 'replacement'} onChange={() => setRefundType('replacement')} className="form-radio h-5 w-5 text-amber-600" />
                    <span className="ml-2">Replacement Product</span>
                </label>
            </div>
            <button onClick={handleReturn} className="btn w-full bg-amber-400 text-white py-2 px-4 rounded hover:bg-amber-500">Return</button>
        </div>
    );
};

export default ReturnPage;
