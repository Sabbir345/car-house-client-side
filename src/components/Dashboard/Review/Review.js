import React, { useRef } from 'react';
import { useParams , useHistory} from 'react-router';

const Review = () => {
    const descriptionRef = useRef();
    const ratingRef = useRef();
    const history = useHistory();

    const handleReview = e => {
        const comment = descriptionRef.current.value;
        const rating = ratingRef.current.value;

        const newReview = { comment, rating};
        
        if (comment.length == 0) {
          alert('Description field is requird.')
        }
        else if (comment.length > 50) {
          alert('Description length must be below 50.')
        }
        else if (rating < 0 || rating > 5) {
          alert('Please provide valid rating.')
        }else{
            fetch('https://hidden-beyond-97375.herokuapp.com/add-review', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newReview)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added.')
                    e.target.reset();
                }
            })
        }

        
        e.preventDefault();
    }
    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="col-md-6 offset-md-3">
                    <h2>Add Review</h2>
                    <form onSubmit={handleReview}>
                        <div className="form-group">
                            <label>Rating ( 0 to 5)</label>
                            <input type="number" ref={ratingRef} className="form-control" placeholder="Enter Rating" />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" ref={descriptionRef} className="form-control" placeholder="Description" />
                        </div>
                        <br/>
                        <input type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;