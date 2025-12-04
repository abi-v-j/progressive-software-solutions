import React, { useMemo, useState } from 'react';

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
};

const ManageReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  const filteredReviews = useMemo(() => {
    return reviews.filter(r =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.comment.toLowerCase().includes(search.toLowerCase())
    );
  }, [reviews, search]);

  const resetForm = () => {
    setName('');
    setRating(5);
    setComment('');
    setEditId(null);
  };

  const handleSubmit = () => {
    if (!name.trim() || !comment.trim() || rating < 1 || rating > 5) {
      alert('All fields are required and rating must be between 1 and 5');
      return;
    }

    if (editId) {
      setReviews(prev =>
        prev.map(r =>
          r.id === editId ? { ...r, name, rating, comment } : r
        )
      );
    } else {
      const newReview: Review = {
        id: crypto.randomUUID(),
        name,
        rating,
        comment,
      };

      setReviews(prev => [newReview, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (review: Review) => {
    setEditId(review.id);
    setName(review.name);
    setRating(review.rating);
    setComment(review.comment);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (!confirm('Delete this review?')) return;
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-lg sm:text-xl font-semibold">Manage Reviews</h1>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search reviews..."
          className="border px-3 py-2 rounded-md text-sm w-full sm:w-64"
        />
      </div>

      {/* ================= FORM ================= */}
      <div className="bg-white p-4 sm:p-5 rounded-lg border space-y-3">
        <h2 className="text-sm font-medium">
          {editId ? 'Edit Review' : 'Add Review'}
        </h2>

        <input
          className="border p-2 rounded w-full text-sm"
          placeholder="Reviewer Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full text-sm"
          value={rating}
          onChange={e => setRating(Number(e.target.value))}
        >
          {[5, 4, 3, 2, 1].map(r => (
            <option key={r} value={r}>
              {r} Star{r > 1 ? 's' : ''}
            </option>
          ))}
        </select>

        <textarea
          className="border p-2 rounded w-full text-sm h-24"
          placeholder="Review Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
          >
            {editId ? 'Update Review' : 'Add Review'}
          </button>

          {editId && (
            <button
              onClick={resetForm}
              className="border px-4 py-2 rounded text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReviews.map(review => (
          <div
            key={review.id}
            className="bg-white border rounded-xl p-4 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-sm line-clamp-1">
                {review.name}
              </p>
              <span className="text-xs font-bold text-yellow-600">
                {review.rating} ★
              </span>
            </div>

            <p className="text-sm text-gray-600 line-clamp-3">
              {review.comment}
            </p>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => handleEdit(review)}
                className="flex-1 border py-1.5 rounded text-xs"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(review.id)}
                className="flex-1 bg-red-600 text-white py-1.5 rounded text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {filteredReviews.length === 0 && (
          <div className="col-span-full text-center py-6 text-gray-500 text-sm">
            No reviews found
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageReviews;
