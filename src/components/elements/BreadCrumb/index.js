import React, { memo, useCallback } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { colors } from '../../../utils/colors';
import i18n from '../../../i18n/i18n';
import { locales } from '../../../i18n/helper';

const BreadCrumb = memo((props) => {

    const { items } = props;

    const breadcrumbs = [
        items?.map((item, index) => <Typography className='m-0 p-0' style={{ color: colors.gray }} key={index} color="text.primary">{item}</Typography>)
    ];

    return (
        <div className='d-flex justify-content-start align-items-center m-0 p-0'>
            <Breadcrumbs className='m-0 p-0' separator={i18n.language === locales.EN ? <MdArrowForwardIos color={colors.gray} /> : <MdArrowBackIos color={colors.gray} />} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            {i18n.language === locales.EN ? <MdArrowForwardIos className='mx-2' color={colors.gray} /> : <MdArrowBackIos className='mx-2' color={colors.gray} />}
        </div>
    );
})

export default BreadCrumb;