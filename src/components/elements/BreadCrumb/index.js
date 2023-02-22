import React, { memo, useCallback } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { MdArrowForwardIos } from "react-icons/md";
import { colors } from '../../../utils/colors';

const BreadCrumb = memo((props) => {

    const { items } = props;

    const breadcrumbs = [
        items?.map((item, index) => <Typography className='m-0 p-0' style={{ color: colors.gray }} key={index} color="text.primary">{item}</Typography>)
    ];

    return (
        <div className='d-flex justify-content-start align-items-center m-0 p-0'>
            <Breadcrumbs className='m-0 p-0' separator={<MdArrowForwardIos color={colors.gray} />} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            <MdArrowForwardIos className='mx-2' color={colors.gray} />
        </div>
    );
})

export default BreadCrumb;