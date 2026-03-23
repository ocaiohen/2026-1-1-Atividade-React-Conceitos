const Card = ({
  id,
  title,
  description,
  price,
  rating,
  thumbnail,
}: {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail?: string;
}) => {
  return (
    <div
      className="bg-white flex items-start gap-4 p-4 rounded-lg shadow-md"
    >
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-28 h-28 object-cover rounded-md shrink-0"
        />
      )}
      <div className="flex flex-col items-start">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="mb-2">{description}</p>
        <p className="font-semibold">Price: ${price}</p>
        <p className="text-sm text-gray-500">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default Card;