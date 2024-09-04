import {PARTNERS} from '../../app/shared/PARTNERS';
export const selectAllPartners = () => {
    return PARTNERS;
};
export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
}
/*export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};
*/