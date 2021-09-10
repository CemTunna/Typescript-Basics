function err(msg: string, code: number): never {
  //never returns anything including 'undefined'
  throw { msg, errCode: code };
}
err('error occured', 404);
