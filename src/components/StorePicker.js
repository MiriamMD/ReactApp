import React from "react";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();

    // first grab the text from the box
    const storeId = this.storeInput.value;
    // second we're going to transition from / to /store/:storeId

    this.context.router.history.push(`/store/${storeId}`);
  }
  render() {
    return (
      <form
        action=""
        className="store-selector"
        onSubmit={e => this.goToStore(e)}>
        {/* Comment */}
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="Store name"
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit store -></button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: PropTypes.object
};

export default StorePicker;
