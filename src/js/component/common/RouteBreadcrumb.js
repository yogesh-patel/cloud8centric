'use strict';

import React, {Component, View} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'react-bootstrap';

class RouteBreadcrumb extends React.Component {

    render() {

        return (
            <Breadcrumb>
                <BreadcrumbItem href="#">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="http://getbootstrap.com/components/#breadcrumbs">
                  Library
                </BreadcrumbItem>
                <BreadcrumbItem active>
                  Data
                </BreadcrumbItem>
            </Breadcrumb>
        )

    }

}

export default RouteBreadcrumb;
