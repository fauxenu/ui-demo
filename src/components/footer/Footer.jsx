import React from 'react';
import './footer.less';

export default function Footer() {
  return (
    <footer className="footer container pattern">
      <div className="row">
        <div className="col-6">
          <h2 className="footer__header">Giat nulla facilisis at vero eros et accumsan etodio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait null.</h2>
          <form className="footer__form">
            <div className="input-group">
              <input type="text" className="mono" placeholder="DOLOR SITAMOTO" />
              <button type="submit" className="input-group__append">
                <i className="icon icon__search icon--black" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
