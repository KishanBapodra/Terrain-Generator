export default function getNormalMap(image) {
  // Adapted from http://www.paulbrunt.co.uk/lab/heightnormal/

  function cross(a, b) {
    return [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0],
    ];
  }

  function subtract(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  }

  function normalize(a) {
    const l = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
    return [a[0] / l, a[1] / l, a[2] / l];
  }

  const depth = 1;

  const width = image.width;
  const height = image.height;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);

  const data = context.getImageData(0, 0, width, height).data;
  const imageData = context.createImageData(width, height);
  const output = imageData.data;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const ly = y - 1 < 0 ? 0 : y - 1;
      const uy = y + 1 > height - 1 ? height - 1 : y + 1;
      const lx = x - 1 < 0 ? 0 : x - 1;
      const ux = x + 1 > width - 1 ? width - 1 : x + 1;

      const points = [];
      const origin = [0, 0, (data[(y * width + x) * 4] / 255) * depth];
      points.push([-1, 0, (data[(y * width + lx) * 4] / 255) * depth]);
      points.push([-1, -1, (data[(ly * width + lx) * 4] / 255) * depth]);
      points.push([0, -1, (data[(ly * width + x) * 4] / 255) * depth]);
      points.push([1, -1, (data[(ly * width + ux) * 4] / 255) * depth]);
      points.push([1, 0, (data[(y * width + ux) * 4] / 255) * depth]);
      points.push([1, 1, (data[(uy * width + ux) * 4] / 255) * depth]);
      points.push([0, 1, (data[(uy * width + x) * 4] / 255) * depth]);
      points.push([-1, 1, (data[(uy * width + lx) * 4] / 255) * depth]);

      const normals = [];
      const num_points = points.length;

      for (let i = 0; i < num_points; i++) {
        let v1 = points[i];
        let v2 = points[(i + 1) % num_points];
        v1 = subtract(v1, origin);
        v2 = subtract(v2, origin);
        normals.push(normalize(cross(v1, v2)));
      }

      const normal = [0, 0, 0];

      for (let i = 0; i < normals.length; i++) {
        normal[0] += normals[i][0];
        normal[1] += normals[i][1];
        normal[2] += normals[i][2];
      }

      normal[0] /= normals.length;
      normal[1] /= normals.length;
      normal[2] /= normals.length;

      const idx = (y * width + x) * 4;

      output[idx] = (((normal[0] + 1.0) / 2.0) * 255) | 0;
      output[idx + 1] = (((normal[1] + 1.0) / 2.0) * 255) | 0;
      output[idx + 2] = (normal[2] * 255) | 0;
      output[idx + 3] = 255;
    }
  }

  context.putImageData(imageData, 0, 0);

  return canvas;
}
