import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { Container, Col, Row } from "react-bootstrap";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Work - Karl Sellergren</title>
      </Head>
      <Container>
        <Row>
          <Col md={6}>
            <p>
              Ciao! I am a freelancing front-end developer based in Helsingborg,
              Sweden. I work with companies, agencies, startups and individuals
              all over the world, creating beautiful things.
            </p>
          </Col>
          <Col md={6}>
            <div>
              <h2>Experience</h2>
              <ul style={{listStyleType: "none"}}>
                <li>
                  <svg viewBox="-11.5 -10.23174 23 20.46348" style={{ height: 30 }} > <circle cx="0" cy="0" r="2.05" fill="#61dafb" /> <g stroke="#61dafb" stroke-width="1" fill="none"> <ellipse rx="11" ry="4.2" /> <ellipse rx="11" ry="4.2" transform="rotate(60)" /> <ellipse rx="11" ry="4.2" transform="rotate(120)" /> </g> </svg>
                  React
                </li>
                <li>
                  <svg viewBox="0 0 256 361" preserveAspectRatio="xMidYMid" style={{height: 30}}> <g> <path d="M127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L127.843868,360.087912 Z" fill="#264DE4" ></path> <path d="M212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L212.416703,314.546637 L212.416703,314.546637 Z" fill="#2965F1" ></path> <path d="M53.6685714,188.636132 L56.530989,220.572835 L128,220.572835 L128,188.636132 L53.6685714,188.636132 L53.6685714,188.636132 Z" fill="#000d36" ></path> <path d="M47.917011,123.994725 L50.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L47.917011,123.994725 Z" fill="#000d36" ></path> <path d="M128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L128,271.580132 Z" fill="#000d36" ></path> <path d="M60.4835165,0 L99.1648352,0 L99.1648352,16.1758242 L76.6593407,16.1758242 L76.6593407,32.3516484 L99.1648352,32.3516484 L99.1648352,48.5274725 L60.4835165,48.5274725 L60.4835165,0 L60.4835165,0 Z" fill="#fff" ></path> <path d="M106.901099,0 L145.582418,0 L145.582418,14.0659341 L123.076923,14.0659341 L123.076923,16.8791209 L145.582418,16.8791209 L145.582418,49.2307692 L106.901099,49.2307692 L106.901099,34.4615385 L129.406593,34.4615385 L129.406593,31.6483516 L106.901099,31.6483516 L106.901099,0 L106.901099,0 Z" fill="#fff" ></path> <path d="M153.318681,0 L192,0 L192,14.0659341 L169.494505,14.0659341 L169.494505,16.8791209 L192,16.8791209 L192,49.2307692 L153.318681,49.2307692 L153.318681,34.4615385 L175.824176,34.4615385 L175.824176,31.6483516 L153.318681,31.6483516 L153.318681,0 L153.318681,0 Z" fill="#fff" ></path> <path d="M202.126769,188.636132 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.932132 L172.892132,155.932132 L169.98611,188.636132 L127.889582,188.636132 L127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L202.126769,188.636132 Z" fill="#000d36" ></path> </g> </svg>
                  CSS3
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{height: 30}}viewBox="5.591 3.262 474.801 137.803" > <path d="M184.614 61.929c0-14.562-4.152-22.038-12.457-22.447-3.305-.156-6.53.37-9.669 1.589-2.505.896-4.191 1.784-5.078 2.681V78.51c5.312 3.334 10.029 4.884 14.143 4.64 8.703-.577 13.061-7.643 13.061-21.221zm10.244.604c0 7.398-1.735 13.539-5.225 18.422-3.889 5.527-9.279 8.373-16.17 8.529-5.195.165-10.547-1.462-16.054-4.874v31.591l-8.909-3.178v-70.12c1.462-1.793 3.344-3.333 5.624-4.64 5.303-3.09 11.745-4.678 19.329-4.756l.126.126c6.931-.087 12.271 2.759 16.024 8.529 3.5 5.293 5.255 12.077 5.255 20.371zM249.305 83.266c0 9.923-.994 16.794-2.982 20.615-1.998 3.82-5.8 6.871-11.414 9.143-4.552 1.793-9.475 2.768-14.757 2.934l-1.473-5.614c5.371-.73 9.153-1.462 11.346-2.193 4.318-1.462 7.281-3.703 8.909-6.706 1.306-2.446 1.949-7.115 1.949-14.025V85.1c-6.092 2.769-12.476 4.143-19.152 4.143-4.387 0-8.256-1.374-11.59-4.143-3.743-3.012-5.614-6.832-5.614-11.462v-37.08l8.909-3.051v37.321c0 3.986 1.286 7.057 3.859 9.211s5.907 3.188 9.991 3.109c4.084-.088 8.46-1.667 13.109-4.757v-43.54h8.909v48.415zM284.082 88.997a35.51 35.51 0 0 1-2.934.126c-5.039 0-8.968-1.198-11.774-3.606-2.798-2.407-4.201-5.73-4.201-9.971v-35.09h-6.102v-5.604h6.102V19.968l8.899-3.168v18.052h10.01v5.604h-10.01v34.846c0 3.344.896 5.712 2.689 7.097 1.54 1.14 3.987 1.793 7.32 1.959v4.639zM338.023 88.266h-8.909V53.878c0-3.499-.818-6.511-2.446-9.025-1.881-2.847-4.493-4.27-7.847-4.27-4.084 0-9.191 2.154-15.322 6.462v41.221h-8.908V6.069l8.908-2.807V40.7c5.692-4.143 11.911-6.219 18.666-6.219 4.718 0 8.538 1.589 11.463 4.757 2.934 3.167 4.396 7.115 4.396 11.833v37.195h-.001zM385.374 60.526c0-5.595-1.062-10.215-3.178-13.87-2.515-4.454-6.423-6.804-11.706-7.047-9.767.565-14.641 7.563-14.641 20.976 0 6.15 1.014 11.287 3.061 15.41 2.612 5.254 6.531 7.847 11.756 7.759 9.805-.079 14.708-7.818 14.708-23.228zm9.757.058c0 7.964-2.037 14.592-6.102 19.884-4.475 5.927-10.653 8.899-18.539 8.899-7.817 0-13.909-2.973-18.305-8.899-3.987-5.292-5.976-11.92-5.976-19.884 0-7.485 2.154-13.782 6.463-18.909 4.552-5.439 10.536-8.168 17.935-8.168 7.397 0 13.421 2.729 18.061 8.168 4.309 5.127 6.463 11.424 6.463 18.909zM446.205 88.266h-8.909V51.929c0-3.986-1.198-7.096-3.596-9.338-2.398-2.232-5.596-3.314-9.582-3.227-4.229.078-8.256 1.462-12.076 4.143v44.759h-8.909v-45.86c5.127-3.732 9.845-6.17 14.153-7.31 4.064-1.062 7.651-1.589 10.741-1.589 2.114 0 4.104.204 5.975.614 3.499.809 6.346 2.31 8.538 4.513 2.447 2.437 3.665 5.36 3.665 8.782v40.85z" fill="#fff"/> <path d="M60.51 6.398c-4.584.021-8.961.412-12.812 1.094-11.346 2.005-13.406 6.2-13.406 13.938v10.219h26.812v3.406H24.229c-7.792 0-14.616 4.684-16.75 13.594-2.462 10.213-2.571 16.586 0 27.25 1.906 7.938 6.458 13.594 14.25 13.594h9.219v-12.25c0-8.85 7.657-16.656 16.75-16.656h26.781c7.455 0 13.406-6.138 13.406-13.625V21.429c0-7.266-6.13-12.725-13.406-13.938-4.607-.766-9.385-1.115-13.969-1.093zm-14.5 8.218c2.77 0 5.031 2.299 5.031 5.125 0 2.816-2.262 5.094-5.031 5.094-2.779 0-5.031-2.277-5.031-5.094 0-2.826 2.252-5.125 5.031-5.125z" fill="#306998"/> <path d="M91.229 35.054V46.96c0 9.231-7.826 17-16.75 17H47.698c-7.336 0-13.406 6.278-13.406 13.625v25.531c0 7.267 6.318 11.541 13.406 13.625 8.487 2.496 16.626 2.947 26.781 0 6.75-1.954 13.406-5.888 13.406-13.625V92.898H61.104v-3.406h40.187c7.793 0 10.696-5.436 13.406-13.594 2.8-8.398 2.681-16.476 0-27.25-1.926-7.757-5.604-13.594-13.406-13.594H91.229zM76.166 99.71c2.779 0 5.031 2.277 5.031 5.094 0 2.826-2.252 5.125-5.031 5.125-2.77 0-5.031-2.299-5.031-5.125 0-2.816 2.262-5.094 5.031-5.094z" fill="#FFD43B"/> <path d="M463.554 26.909h1.562v-9.796h3.699v-1.168h-8.962v1.168h3.7v9.796m6.648 0h1.334v-8.947l2.896 8.946h1.485l3.019-8.916v8.917h1.456V15.946h-1.926l-3.299 9.393-2.812-9.393h-2.153v10.963" fill="#fff"/> </svg>
                  Python
                </li>
                <li>
                  <svg viewBox="0 0 816 240" style={{fill: "#ffffff", height: 30}}> <path d="M166.22 158.36h-22l-25.27-71.7-14.19 39.22h21.84l6 17.07H99.43l-5.74 15.43h-22l35.1-91.1h24.31zm392.25 0v-17.07h-38.52v-74h-19.53v91.1zm112.57 0v-17.07h-38.5v-74h-19.56v91.1zM392.25 83.59a29.29 29.29 0 1 0 29.29 29.29 29.32 29.32 0 0 0-29.29-29.29m0-17.83a47.12 47.12 0 1 1-47.11 47.12 47.12 47.12 0 0 1 47.12-47.12zm368.57 17.83a29.29 29.29 0 1 0 29.29 29.29 29.32 29.32 0 0 0-29.29-29.29m0-17.83a47.12 47.12 0 1 1-47.12 47.12 47.12 47.12 0 0 1 47.12-47.12zm-466 31.38c0 16.19-13.12 29.87-29.32 29.87h-23.06v31.35h-19.4v-91.1h42.5c16.17 0 29.29 13.68 29.29 29.87zm-17.83 0c0-6.33-5.15-12-11.49-12h-23.06v24.04h23.1c6.31 0 11.47-5.71 11.47-12.05zm-70.71 88.87a5 5 0 0 0-4.09 2.12s-4.37 5-6.73 7.35a108.71 108.71 0 1 1-8.49-161.28 12.25 12.25 0 1 0 6.87-7.32 118.67 118.67 0 1 0 16 167.71 5 5 0 0 0-3.55-8.56z"></path> </svg>
                  GraphQL using Apollo
                </li>
                <li>
                  <svg viewBox="0 0 148 90" style={{height: 30, shapeRendering: "auto"}}> <path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="#FFF" fill-rule="nonzero" ></path> </svg>
                  Node.JS and Next.JS
                </li>
                <li>
                  <svg viewBox="0 0 1258.2 200" style={{enableBackground: "new 0 0 1258.2 200", height: 30,}}> <g> <g> <defs> <rect id="SVGID_1_" x="-101" y="-100"/> </defs> <clipPath id="SVGID_2_"> <use style={{overflow: "visible"}}/> </clipPath> <g class="st0"> <g> <g> <g> <path d="M100,6c18.8,0,37.1,5.6,52.6,16.1c15.1,10.2,27,24.6,34.1,41.4c12.4,29.3,9.1,62.8-8.7,89.1 c-10.2,15.1-24.6,27-41.4,34.1c-29.3,12.4-62.8,9.1-89.1-8.7c-15.1-10.2-27-24.6-34.1-41.4C1,107.3,4.3,73.8,22.1,47.5 c10.2-15.1,24.6-27,41.4-34.1C75,8.5,87.5,6,100,6 M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100s100-44.8,100-100 S155.2,0,100,0" fill="#00749C"/> <path d="M16.7,100c0,31.9,18.2,61.1,47,75L23.9,66.1C19.1,76.8,16.7,88.3,16.7,100 M156.3,95.8 c0-10.3-3.7-17.4-6.9-23s-8.2-12.7-8.2-19.5s5.8-14.8,14-14.8h1.1C122.4,7.4,69.7,9.7,38.6,43.7c-3,3.3-5.8,6.8-8.2,10.5h5.4 c8.7,0,22.2-1.1,22.2-1.1c4.5-0.3,5,6.3,0.5,6.9c0,0-4.5,0.5-9.5,0.8l30.3,90.3l18.2-54.7l-13-35.6C80,60.5,75.8,60,75.8,60 c-4.5-0.3-4-7.1,0.5-6.9c0,0,13.8,1.1,21.9,1.1s22.2-1.1,22.2-1.1c4.5-0.3,5,6.3,0.5,6.9c0,0-4.5,0.5-9.5,0.8l30.1,89.6 l8.6-27.2c3.8-11.9,6.1-20.3,6.1-27.5 M101.4,107.2l-25,72.7c16.8,4.9,34.7,4.5,51.2-1.3l-0.6-1.1L101.4,107.2z M173.1,60 c0.4,2.8,0.6,5.7,0.6,8.6c0,8.5-1.6,18-6.3,29.8L141.9,172C180.9,149.3,194.8,99.6,173.1,60" fill="#00749C"/> <path d="M557.5,74.2h-39.7v4.2c12.4,0,14.4,2.7,14.4,18.4v28.4c0,15.8-2,18.7-14.4,18.7 c-9.6-1.3-16-6.4-24.9-16.2l-10.2-11.1c13.8-2.4,21.1-11.1,21.1-20.9c0-12.2-10.4-21.6-30-21.6h-39.1v4.2 c12.4,0,14.4,2.7,14.4,18.4v28.4c0,15.8-2,18.7-14.4,18.7v4.2h44.2v-4c-12.4,0-14.4-2.9-14.4-18.7v-8h3.8l24.7,30.9h64.7 c31.8,0,45.6-16.9,45.6-37.1s-13.8-36.9-45.6-36.9 M464.6,110.4V80.9h9.1c10,0,14.4,6.9,14.4,14.9s-4.4,14.7-14.4,14.7 L464.6,110.4z M558.4,141.3h-1.6c-8,0-9.1-2-9.1-12.2V80.9h10.7c23.1,0,27.3,16.9,27.3,30S581.5,141.3,558.4,141.3" fill="#fff"/> <path d="M310.9,118.7l15.3-45.3c4.4-13.1,2.4-16.9-11.8-16.9V52h41.8v4.4c-14,0-17.3,3.3-22.9,19.6L308,152h-2.9 l-22.7-69.6L259.3,152h-2.9l-24.7-76c-5.3-16.2-8.9-19.6-21.8-19.6V52h49.3v4.4c-13.1,0-16.7,3.1-12,16.9l14.9,45.3L284.7,52 h4.2L310.9,118.7z" fill="#fff"/> <path d="M386.4,151.1c-24.4,0-44.4-18-44.4-40s20-39.8,44.4-39.8s44.4,18,44.4,39.8S410.8,151.1,386.4,151.1 M386.4,78.2c-20.4,0-27.6,18.4-27.6,32.9S366,144,386.4,144s27.8-18.2,27.8-32.9S407.1,78.2,386.4,78.2" fill="#fff"/> <path d="M658,143.8v4.4h-50.9v-4.4c14.9,0,17.6-3.8,17.6-26V82.2c0-22.2-2.7-25.8-17.6-25.8V52h46 c22.9,0,35.6,11.8,35.6,27.6s-12.7,27.3-35.6,27.3h-12.7v10.9C640.4,140,643.1,143.8,658,143.8 M653.1,60h-12.7v38.7h12.7 c12.4,0,18.2-8.7,18.2-19.1S665.5,60,653.1,60" fill="#fff"/> <path d="M841.3,127.3l-1.1,4c-2,7.3-4.4,10-20.2,10h-3.1c-11.6,0-13.6-2.7-13.6-18.4v-10.2 c17.3,0,18.7,1.6,18.7,13.1h4.2V92.7H822c0,11.6-1.3,13.1-18.7,13.1V80.9h12.2c15.8,0,18.2,2.7,20.2,10l1.1,4.2h3.6l-1.6-20.9 h-65.3v4.2c12.4,0,14.4,2.7,14.4,18.4v28.4c0,14.4-1.7,18.1-11.5,18.6c-9.3-1.4-15.7-6.5-24.5-16.1l-10.2-11.1 c13.8-2.4,21.1-11.1,21.1-20.9c0-12.2-10.4-21.6-30-21.6h-39v4.2c12.4,0,14.4,2.7,14.4,18.4v28.4c0,15.8-2,18.7-14.4,18.7v4.2 H738v-4c-12.4,0-14.4-2.9-14.4-18.7v-8h3.8l24.6,30.9h91.3l1.3-20.9C844.6,127.3,841.3,127.3,841.3,127.3z M723.5,110.4V80.9 h9.1c10,0,14.4,6.9,14.4,14.9s-4.4,14.7-14.4,14.7L723.5,110.4z" fill="#fff"/> <path d="M886.4,151.1c-8.9,0-16.7-4.7-20-7.6c-1.9,2.2-3.1,4.8-3.6,7.6h-4.2v-30.7h4.4 c1.8,14.7,12,23.3,25.1,23.3c7.1,0,12.9-4,12.9-10.7s-5.1-10.2-14.2-14.4l-12.7-6c-8.9-4.2-15.6-11.6-15.6-21.3 s10-19.8,23.8-19.8c6.3-0.1,12.4,2,17.3,5.8c1.1-0.9,2.2-3.3,2.9-6h4.2v26.2H902c-1.6-10.4-7.3-19.1-19.1-19.1 c-6.2,0-12,3.6-12,9.1s4.7,8.9,15.3,13.8l12.2,6c10.7,5.1,14.9,13.3,14.9,20c0,14-12.2,23.8-27.1,23.8" fill="#fff"/> <path d="M953.6,151.1c-8.9,0-16.7-4.7-20-7.6c-1.9,2.2-3.1,4.8-3.6,7.6h-4.2v-30.7h4.4 c1.8,14.7,12,23.3,25.1,23.3c7.1,0,12.9-4,12.9-10.7s-5.1-10.2-14.2-14.4l-12.7-6c-8.9-4.2-15.6-11.6-15.6-21.3 s10-19.8,23.8-19.8c6.3-0.1,12.4,2,17.3,5.8c1.1-0.9,2.2-3.3,2.9-6h4.2v26.2h-4.7c-1.6-10.4-7.3-19.1-19.1-19.1 c-6.2,0-12,3.6-12,9.1s4.7,8.9,15.3,13.8l12.2,6c10.7,5.1,14.9,13.3,14.9,20c0,14-12.2,23.8-27.1,23.8" fill="#fff"/> <path d="M1064.2,150.3c-22.6,0-41.1-17.6-41.1-39.1s18.5-39.1,41.1-39.1s41.2,17.6,41.2,39.1 S1086.9,150.3,1064.2,150.3 M1034.8,111.2c0,15.3,8.1,34.2,29.4,34.2s29.5-18.9,29.5-34.2s-8.1-34.3-29.5-34.3 S1034.8,95.9,1034.8,111.2" fill="#fff"/> <path d="M1157.1,130c7.3,8.6,15.5,14.8,22.9,15.7v2.6h-20.4l-24.4-32.4h-5.8v15.4c0,12.3,1.5,14.4,11.7,14.4v2.6 h-33.3v-2.6c10.2,0,11.7-2.1,11.7-14.4V91.1c0-12.3-1.5-14.3-11.7-14.3v-2.6h32.6c17.1,0,26.5,9.4,26.5,20.8s-8,19.2-22,20.7 L1157.1,130z M1156,95.1c0-8.9-4.9-16.3-15.7-16.3h-10.9v32.6h10.9C1151,111.4,1156,104.1,1156,95.1" fill="#fff"/> <path d="M1225.9,120.1v-2.5h32.3v2.5c-10.2,0-11.7,2.1-11.7,14.4v9.4c-13.7,0-19.2,6.4-32.1,6.4 c-20.8,0-37.9-17.6-37.9-39.1s17-39.1,37.9-39.1c8.6,0,16.7,3.8,22.9,10.5c2.1-1.8,3.6-4.3,4.2-7h2.5v27.1h-2.5 c-3.3-16-13-25.8-26.8-25.8c-19.7,0-26.9,19-26.9,34.3s6.4,33.8,29.2,33.8c10.7,0,20.4-5.8,20.4-16.9 C1237.4,122.8,1234.3,120.1,1225.9,120.1" fill="#fff"/> <path d="M1004,149.5c-4.4,0-7.9-3.5-7.9-7.9s3.5-7.9,7.9-7.9s7.9,3.5,7.9,7.9S1008.4,149.5,1004,149.5" fill="#fff"/> </g> </g> </g> </g> </g> </g> </svg>
                  Wordpress theme development
                </li>
                <li>
                  <svg viewBox="0 0 100 24" style={{height: 30}}> <radialGradient id="kotlin-logo-large_svg__a" cx="22.432" cy="3.493" r="21.679" gradientTransform="translate(-.19 .042) scale(.9998)" gradientUnits="userSpaceOnUse" > <stop offset="0.003" stop-color="#e44857"></stop> <stop offset="0.469" stop-color="#c711e1"></stop> <stop offset="1" stop-color="#7f52ff"></stop> </radialGradient> <path fill="url(#kotlin-logo-large_svg__a)" d="M22.87 21.68H3.94V2.76h18.93l-9.66 9.32z" ></path> <g fill="#fff"> <path d="M45.69 2.73h-3.76l-8.18 8.73v-8.7h-3.02v18.92h3.02v-9.17l8.21 9.17h3.89l-8.75-9.79z"></path> <path d="M55.93 8.44c-1.07-.62-2.28-.93-3.64-.93-1.38 0-2.61.31-3.7.93a6.63 6.63 0 00-2.55 2.57c-.61 1.1-.91 2.35-.91 3.74 0 1.4.3 2.64.91 3.74a6.45 6.45 0 002.53 2.57c1.09.62 2.32.93 3.7.93 1.36 0 2.58-.31 3.66-.93a6.53 6.53 0 002.51-2.57c.6-1.1.9-2.35.9-3.74 0-1.4-.3-2.64-.9-3.74-.6-1.1-1.43-1.95-2.51-2.57zm-.19 8.7c-.33.69-.8 1.23-1.4 1.61-.6.39-1.3.58-2.08.58-.79 0-1.49-.19-2.11-.58-.61-.39-1.09-.93-1.43-1.61-.34-.69-.51-1.48-.51-2.38 0-.9.17-1.7.51-2.39.34-.69.82-1.23 1.43-1.61.61-.39 1.32-.58 2.12-.58.77 0 1.46.19 2.07.58.6.39 1.07.93 1.4 1.61.33.69.49 1.48.49 2.39.01.9-.15 1.69-.49 2.38zm9.75-12.76h-2.92v2.35c0 .37-.09.65-.27.83-.18.18-.46.28-.84.28h-1.43v2.49h2.49v7.45c0 .77.16 1.46.47 2.05.31.59.76 1.05 1.34 1.37.58.32 1.27.49 2.06.49h2.23V19.1h-1.68c-.43 0-.78-.15-1.06-.45-.27-.3-.4-.7-.4-1.2v-7.11h3.22v-2.5h-3.22V4.38zM71.03 2H74v19.68h-2.97zm6.32.03h3v3.05h-3zm0 5.81h2.97v13.84h-2.97zm18.08 2.28a4.694 4.694 0 00-1.77-1.92c-.76-.46-1.65-.69-2.67-.69-1.08 0-2.03.26-2.84.79-.65.42-1.17.98-1.58 1.68l-.02-2.14H83.7v13.84h2.97v-7.74c0-.75.14-1.41.43-1.99.28-.58.68-1.03 1.2-1.35.52-.32 1.12-.48 1.82-.48.62 0 1.16.13 1.6.39.45.26.78.64 1.01 1.12.23.49.34 1.07.34 1.74v8.31h2.97v-8.73c.02-1.07-.2-2.01-.61-2.83z"></path> </g> </svg>
                  Kotlin
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
