import React from 'react'

interface P {
  className: string;
}
const Cirql: React.FC<P> = ({ className }) => {
  return (
    <svg width="80" height="" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.06 19.1C6.47333 19.1 5.09333 18.8133 3.92 18.24C2.74667 17.6533 1.84667 16.8267 1.22 15.76C0.593333 14.6933 0.28 13.4533 0.28 12.04C0.28 10.08 0.646667 8.34 1.38 6.82C2.12667 5.3 3.13333 4.12667 4.4 3.3C5.66667 2.46 7.07333 2.04 8.62 2.04C10.06 2.04 11.1533 2.41333 11.9 3.16C12.6467 3.89333 13.02 4.86667 13.02 6.08C13.02 6.89333 12.8733 7.54667 12.58 8.04C12.3 8.53333 11.8933 8.78 11.36 8.78C10.9867 8.78 10.6933 8.69333 10.48 8.52C10.2667 8.34667 10.16 8.09333 10.16 7.76C10.16 7.64 10.1867 7.42 10.24 7.1C10.32 6.7 10.36 6.38 10.36 6.14C10.36 4.92667 9.71333 4.32 8.42 4.32C7.54 4.32 6.7 4.60667 5.9 5.18C5.1 5.75333 4.45333 6.6 3.96 7.72C3.46667 8.82667 3.22 10.1467 3.22 11.68C3.22 13.28 3.66667 14.52 4.56 15.4C5.45333 16.2667 6.77333 16.7 8.52 16.7C9.38667 16.7 10.26 16.5933 11.14 16.38C12.0333 16.1533 13.02 15.8133 14.1 15.36C14.3 15.28 14.4667 15.24 14.6 15.24C14.8133 15.24 14.9733 15.32 15.08 15.48C15.1867 15.64 15.24 15.8467 15.24 16.1C15.24 16.9133 14.8 17.5133 13.92 17.9C12.9733 18.3133 11.9867 18.62 10.96 18.82C9.94667 19.0067 8.98 19.1 8.06 19.1ZM18.8909 8.36C18.3309 8.36 17.9109 8.23333 17.6309 7.98C17.3509 7.71333 17.2109 7.34667 17.2109 6.88C17.2109 6.41333 17.3909 6.02667 17.7509 5.72C18.1243 5.4 18.5843 5.24 19.1309 5.24C19.6243 5.24 20.0243 5.36 20.3309 5.6C20.6376 5.84 20.7909 6.18 20.7909 6.62C20.7909 7.15333 20.6176 7.58 20.2709 7.9C19.9243 8.20667 19.4643 8.36 18.8909 8.36ZM18.7309 19.1C17.8643 19.1 17.2309 18.7933 16.8309 18.18C16.4443 17.5667 16.2509 16.7533 16.2509 15.74C16.2509 15.14 16.3243 14.3733 16.4709 13.44C16.6309 12.4933 16.8309 11.6133 17.0709 10.8C17.1909 10.3733 17.3509 10.08 17.5509 9.92C17.7509 9.76 18.0709 9.68 18.5109 9.68C19.1909 9.68 19.5309 9.90667 19.5309 10.36C19.5309 10.6933 19.4043 11.4667 19.1509 12.68C18.8309 14.1467 18.6709 15.14 18.6709 15.66C18.6709 16.06 18.7243 16.3667 18.8309 16.58C18.9376 16.7933 19.1176 16.9 19.3709 16.9C19.6109 16.9 19.9109 16.7333 20.2709 16.4C20.6309 16.0667 21.1109 15.54 21.7109 14.82C21.8709 14.6333 22.0509 14.54 22.2509 14.54C22.4243 14.54 22.5576 14.62 22.6509 14.78C22.7576 14.94 22.8109 15.16 22.8109 15.44C22.8109 15.9733 22.6843 16.3867 22.4309 16.68C21.1109 18.2933 19.8776 19.1 18.7309 19.1ZM25.2128 19.1C24.7061 19.1 24.3461 18.8333 24.1328 18.3C23.9328 17.7667 23.8328 16.9133 23.8328 15.74C23.8328 14.0067 24.0795 12.36 24.5728 10.8C24.6928 10.4133 24.8861 10.1333 25.1528 9.96C25.4328 9.77333 25.8195 9.68 26.3128 9.68C26.5795 9.68 26.7661 9.71333 26.8728 9.78C26.9795 9.84667 27.0328 9.97333 27.0328 10.16C27.0328 10.3733 26.9328 10.8533 26.7328 11.6C26.5995 12.1333 26.4928 12.6 26.4128 13C26.3328 13.4 26.2661 13.8933 26.2128 14.48C26.6528 13.3333 27.1461 12.4 27.6928 11.68C28.2395 10.96 28.7728 10.4467 29.2928 10.14C29.8261 9.83333 30.3128 9.68 30.7528 9.68C31.6195 9.68 32.0528 10.1133 32.0528 10.98C32.0528 11.1533 31.9928 11.5733 31.8728 12.24C31.7661 12.7733 31.7128 13.1067 31.7128 13.24C31.7128 13.7067 31.8795 13.94 32.2128 13.94C32.5861 13.94 33.0661 13.6467 33.6528 13.06C33.8261 12.8867 34.0061 12.8 34.1928 12.8C34.3661 12.8 34.4995 12.88 34.5928 13.04C34.6995 13.1867 34.7528 13.3867 34.7528 13.64C34.7528 14.1333 34.6195 14.52 34.3528 14.8C33.9795 15.1867 33.5395 15.52 33.0328 15.8C32.5395 16.0667 32.0128 16.2 31.4528 16.2C30.7461 16.2 30.2061 16.02 29.8328 15.66C29.4728 15.3 29.2928 14.8133 29.2928 14.2C29.2928 14 29.3128 13.8 29.3528 13.6C29.3795 13.3333 29.3928 13.1533 29.3928 13.06C29.3928 12.8467 29.3195 12.74 29.1728 12.74C28.9728 12.74 28.7061 12.9667 28.3728 13.42C28.0528 13.86 27.7328 14.4467 27.4128 15.18C27.0928 15.9133 26.8328 16.6867 26.6328 17.5C26.4861 18.1267 26.3128 18.5533 26.1128 18.78C25.9261 18.9933 25.6261 19.1 25.2128 19.1ZM46.7144 15.16C47.021 15.16 47.1744 15.3667 47.1744 15.78C47.1744 16.3 47.0544 16.7067 46.8144 17C46.5877 17.2933 46.2744 17.44 45.8744 17.44L45.1344 17.42C45.001 17.4067 44.8077 17.4 44.5544 17.4C44.6077 18.16 44.6344 18.92 44.6344 19.68C44.6344 21.6933 44.3677 23.4467 43.8344 24.94C43.3144 26.4333 42.4944 27.18 41.3744 27.18C40.6144 27.18 40.0344 26.74 39.6344 25.86C39.2477 24.9933 39.0544 23.9333 39.0544 22.68C39.0544 21.12 39.2277 19.58 39.5744 18.06C39.121 18.7533 38.5277 19.1 37.7944 19.1C37.061 19.1 36.4477 18.7933 35.9544 18.18C35.4744 17.5667 35.2344 16.7733 35.2344 15.8C35.2344 14.7467 35.481 13.7467 35.9744 12.8C36.481 11.8533 37.1477 11.0933 37.9744 10.52C38.8144 9.93333 39.7077 9.64 40.6544 9.64C40.9744 9.64 41.221 9.74667 41.3944 9.96C41.5144 9.53333 41.6944 9.24667 41.9344 9.1C42.1744 8.95333 42.5077 8.88 42.9344 8.88C43.3877 8.88 43.6877 8.94667 43.8344 9.08C43.9944 9.21333 44.0677 9.40667 44.0544 9.66C44.0544 9.82 43.9677 10.1933 43.7944 10.78C43.6344 11.3533 43.5277 11.7333 43.4744 11.92C43.261 12.6667 43.0277 13.4933 42.7744 14.4C42.5344 15.3067 42.341 16.1333 42.1944 16.88C41.7677 19.0133 41.5544 20.9 41.5544 22.54C41.5544 23.1533 41.601 23.6733 41.6944 24.1C41.801 24.54 41.9344 24.76 42.0944 24.76C42.2277 24.76 42.3677 24.5333 42.5144 24.08C42.6744 23.6267 42.8077 23.02 42.9144 22.26C43.021 21.5 43.0744 20.6933 43.0744 19.84C43.0744 18.8267 43.0277 17.9267 42.9344 17.14C42.921 17.0733 42.9144 16.9667 42.9144 16.82C42.9144 16.38 43.021 16.0133 43.2344 15.72C43.461 15.4267 43.7744 15.28 44.1744 15.28C44.2277 15.28 44.7344 15.26 45.6944 15.22C46.0944 15.18 46.4344 15.16 46.7144 15.16ZM38.5944 17.08C38.901 17.08 39.1944 16.8933 39.4744 16.52C39.7544 16.1333 39.9544 15.6733 40.0744 15.14L40.9344 11.5C40.3477 11.5133 39.8077 11.72 39.3144 12.12C38.8344 12.52 38.4477 13.0533 38.1544 13.72C37.8744 14.3733 37.7344 15.0667 37.7344 15.8C37.7344 16.2133 37.8077 16.5333 37.9544 16.76C38.1144 16.9733 38.3277 17.08 38.5944 17.08ZM53.8744 16.18C54.021 16.0467 54.1677 15.98 54.3144 15.98C54.4744 15.98 54.601 16.0733 54.6944 16.26C54.801 16.4333 54.8544 16.6467 54.8544 16.9C54.8544 17.46 54.6544 17.9067 54.2544 18.24C53.561 18.8133 52.7744 19.1 51.8944 19.1C50.6277 19.1 49.701 18.5733 49.1144 17.52C48.5277 16.4533 48.2344 15.0667 48.2344 13.36C48.2344 11.7333 48.441 9.88 48.8544 7.8C49.281 5.72 49.901 3.93333 50.7144 2.44C51.541 0.946665 52.521 0.199999 53.6544 0.199999C54.2944 0.199999 54.7944 0.499999 55.1544 1.1C55.5277 1.68667 55.7144 2.53333 55.7144 3.64C55.7144 5.22667 55.2744 7.06667 54.3944 9.16C53.5277 11.2533 52.341 13.32 50.8344 15.36C50.9277 15.9067 51.0944 16.3 51.3344 16.54C51.5744 16.78 51.901 16.9 52.3144 16.9C52.541 16.9 52.7944 16.8333 53.0744 16.7C53.3677 16.5667 53.6344 16.3933 53.8744 16.18ZM53.2144 2.18C52.9077 2.18 52.561 2.73333 52.1744 3.84C51.7877 4.94667 51.4477 6.32 51.1544 7.96C50.861 9.6 50.701 11.1733 50.6744 12.68C51.621 11.12 52.3744 9.56 52.9344 8C53.4944 6.42667 53.7744 4.99333 53.7744 3.7C53.7744 2.68667 53.5877 2.18 53.2144 2.18Z" className={className} />
    </svg>
  )
}

export default Cirql