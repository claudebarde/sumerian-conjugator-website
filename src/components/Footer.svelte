<style>
  footer {
    width: 100%;
    background: #ffd591;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 4px 10px;
    font-size: 0.8rem;
    z-index: 20;
  }

  footer a {
    text-decoration: none;
    color: royalblue;
  }

  footer div {
    text-align: center;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    footer {
      display: flex;
      flex-direction: column;
      font-size: 0.6rem;
    }
  }
</style>

<footer>
  <div>Developed by Claude Barde</div>
  <div>
    The Sumerian Conjugator is part of the
    <a href="https://www.modernsumerian.org" target="_blank">
      Modern Sumerian Project
    </a>
  </div>
  <div>Version 1.2.0</div>
</footer>
