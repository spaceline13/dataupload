import React from 'react';

import HeaderContentsFooterTemplate from '../components/templates/HeaderContentsFooterTemplate';
import Uploader from '../components/organisms/Uploader';

const UploadFilePage = () => {
    return (
        <HeaderContentsFooterTemplate>
            <Uploader />
        </HeaderContentsFooterTemplate>
    );
};

export default UploadFilePage;
