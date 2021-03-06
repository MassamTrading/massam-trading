import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, getPageByFilePath} from '../utils';
import Picture from './Picture';

export default class ProductGridItem extends React.Component {
    render() {
        let product_page = _.get(this.props, 'product_page', null);
        return (
            <li className="product-grid__item">
                <figure className="product-grid__item-figure">
                    <Link className="product-grid__item-link" href="#">
                    {/* <Link className="product-grid__item-link" href={withPrefix(_.get(product_page, '__metadata.urlPath', null))}> */}
                        <Picture {...this.props} image={_.get(product_page, 'frontmatter.default_thumbnail_image', null)} alt={_.get(product_page, 'frontmatter.title', null)} cssClass={'product-grid__item-image'} />
                    </Link>
                </figure>
                <div className="product-grid__definition">
                    <Link href="#"><h3 className="product-grid__title">{_.get(product_page, 'frontmatter.title', null)}</h3></Link>
                    {/* <Link href={withPrefix(_.get(product_page, '__metadata.urlPath', null))}><h3 className="product-grid__title">{_.get(product_page, 'frontmatter.title', null)}</h3></Link> */}
                    {_.get(product_page, 'frontmatter.category', null) && ((() => {
                        let category_page = getPageByFilePath(this.props.pages, _.get(product_page, 'frontmatter.category', null));
                        return (
                            <span className="product-grid__category"> {_.get(category_page, 'frontmatter.title', null)} </span>
                        );
                    })())}
                    <span className="product__description"> {_.get(product_page, 'frontmatter.description', null)} </span>
                </div>
            </li>
        );
    }
}
