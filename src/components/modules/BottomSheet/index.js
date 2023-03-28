import { BottomSheet } from 'react-spring-bottom-sheet'
import { GrClose } from "react-icons/gr";
import 'react-spring-bottom-sheet/dist/style.css'
import Heading from '../../elements/Heading';

const BottomSheetBar = (props) => {

    const { open, setOpen, options } = props;

    return (
        <>
            <BottomSheet
                style={{ height: "100%", zIndex: 2000 }}
                open={open}
                onDismiss={() => setOpen(false)}
            >
                <div className='p-0 m-0'>
                    <div className='d-flex px-4 py-2 align-items-center justify-content-between'>
                        <div>
                            <Heading nomargin size={"xxs"} heading="Download" />
                        </div>
                        <div>
                            <GrClose onClick={() => setOpen(false)} color='#101010' />
                        </div>
                    </div>
                    <hr className='m-0 p-0' />
                    {
                        options?.map((item, index) => {
                            return (
                                <div key={index} className='px-4 py-3 d-flex col-12 align-items-center justify-content-between'>
                                    <div className='col-2'>
                                        {item.icon}
                                    </div>
                                    <div className='col-10'>
                                        <a href={item.downloadLink} className='multine-ellipsis-2 text-decoration-none text-black m-0 p-0'>{item.title}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </BottomSheet>
        </>
    )
}

export default BottomSheetBar;