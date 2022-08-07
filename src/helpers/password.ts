const compare = (password: string, hash: string): boolean => {
  if (!password || !hash) {
    return false;
  }

  if (typeof password != 'string' || typeof hash != 'string') {
    return false;
  }

  return password === hash;
};

export { compare };
