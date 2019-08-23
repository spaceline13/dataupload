import React from 'react';

import Mapper from '../components/organisms/Mapper';
import HeaderContentsFooterTemplate from '../components/templates/HeaderContentsFooterTemplate';

const MappingPage = () => {
    return (
        <HeaderContentsFooterTemplate>
            <Mapper />
        </HeaderContentsFooterTemplate>
    );
};

export default MappingPage;
