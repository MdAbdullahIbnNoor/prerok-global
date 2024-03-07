import BannerCustoms from '../../Components/CustomsDocument/BannerCustoms/BannerCustoms'
import AboutCustoms from '../../Components/CustomsDocument/AboutCustoms/AboutCustoms'
import FeaturesCustoms from '../../Components/CustomsDocument/FeaturesCustoms/FeaturesCustoms'
import DocumentForm from '../../Components/CustomsDocument/DocumentForm/DocumentForm'
import { useEffect } from 'react'


const CustomsDocument = () => {
  useEffect(() => {
    document.title = "Customs Document | PrerokGlobal";
  }, []);
  return (
    <div>
        <BannerCustoms/>
        <AboutCustoms/>
        <FeaturesCustoms/>
        <DocumentForm/>
    </div>
  )
}

export default CustomsDocument