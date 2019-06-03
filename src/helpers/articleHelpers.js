export function shortenBodyText(body) {
  return body.replace(/<[^>]*>/g, "").slice(0,200) + "...";
}

export function generateHandle(title) {
  return title.toLowerCase().replace(/\#/g, "").replace(/\s/g, "-");
}
