const getGiftPlaceholder = (id: string) => {
  let n = 0;
  for (let i = 0; i < id.length; i++) {
    const c = !Number(id[i]) ? 0 : parseInt(id[i]);
    n = n + c;
  }

  for (let r = 4; r > 0; r--) {
    if (n % r === 0) return r;
  }
  return 1;
};

export const getGiftImage = (gift: any) => {
  return gift.image
    ? `https://res.cloudinary.com/dh6pz73hd/image/upload/v1668707902/${gift.image}`
    : `/assets/placeholders/gifts/${getGiftPlaceholder(gift._id)}.jpg`;
};
