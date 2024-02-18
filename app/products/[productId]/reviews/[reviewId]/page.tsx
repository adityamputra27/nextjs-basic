const ReviewDetail = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  return (
    <div>
      ReviewDetail productId : {params.productId} reviewId : {params.reviewId}
    </div>
  );
};

export default ReviewDetail;
