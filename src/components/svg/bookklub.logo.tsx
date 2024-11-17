import React, { SVGProps } from "react";

const BookklubLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="180"
      height="56"
      viewBox="0 0 180 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="180" height="56" rx="28" fill="#599B7B" fillOpacity="0.15" />
      <rect
        x="0.5"
        y="0.5"
        width="179"
        height="55"
        rx="27.5"
        stroke="#599B7B"
        strokeOpacity="0.1"
      />
      <rect
        x="21"
        y="12"
        width="138.947"
        height="32"
        fill="url(#pattern0_846_46611)"
      />
      <defs>
        <pattern
          id="pattern0_846_46611"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_846_46611"
            transform="matrix(0.00230303 0 0 0.01 -0.0147273 0)"
          />
        </pattern>
        <image
          id="image0_846_46611"
          width="447"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb8AAABkCAYAAAAWnT4qAAAAAXNSR0IArs4c6QAAIABJREFUeF7svQmYZFV5N37ufmvvfZ+eYRijkuhnJG6JJn8FAwiKiRFM3EiMifp9xigQFM3nmKAg0Wg0boiKkUUh8XNBdowrgrgEEhFhmOl9re6q6trufv/P77331NwuqquruntmcKbu80D3dN2695z3nPP+3v0VWOfqUKBDgQ4FOhToUOAEo4Bwgs23M90OBToU6FCgQ4EOBVgH/DqboEOBDgU6FOhQ4ISjQAf8Trgl70y4Q4EOBToU6FCgA36dPdChQIcCHQp0KHDCUaADfifckncm3KFAhwIdCnQo0AG/zh7oUKBDgQ4FOhQ44SjQAb8Tbsk7E+5QoEOBDgU6FOiAX2cPdCjQoUCHAh0KnHAU6IDfCbfknQl3KNChQIcCHQp0wK+zBzoU6FCgQ4EOBU44CnTA74Rb8s6EOxToUKBDgQ4FOuDX2QMdCnQo0KFAhwInHAU64HfCLXlnwh0KdCjQoUCHAh3w6+yBDgU6FOhQoEOBE44CHfA74Za8M+EOBToU6FCgQ4EO+HX2QIcCHQp0KNChwAlHgQ74McZ83yc6vO9971tHj/e+970+/i4IAv3sXB0KdCjQoUCHAscHBY4t+Pm+8J5r/mmfJUhPFQVpXJakIUn0EyCt7ws0NlmVBcETBFEUROYzkYlMEvEvJkq+4IuKooi+zwTBFwVB9ARGOAasEvDDZ4Loe8xhtuv7lmN4sqR5alz2y4WqF0vovm3ZTPB932W+T1/wBd9nHmO+x3xB8GVf8F3H9jRFL1ml8i+ZI/yMzeQe2r9/v3d8bIHOLDoU6FCgQ4ETjwLHBPwu/eQ/PT2R1P+34Tl/bGtyxpUFRRJEaFj0XwB+gbLFf4qh7sU/50vleR7zBJ+JUdDj4Bf+9EXGRFFitmszAe+RBGYaFtN1nfmex7heF+h/Neik30UmMN9xGcbnOQ5TJNk2TeuxmMzO3/9nf/vgibdlOjN+olPgpKc+6cWWYQ5BhJNUCWId7WwvENd8Rjvexe4WJMbYzIFD1x7LOY0/ae/p+VJpKJFO+hBfLcsSJMtluhpjrmsx2/V8JomMKZJQLZb98mL2+mM53r1P2fu0quU+HfR1PY8kZhoPiMkCykr4HyRwjF2QvpOdnp47lmM+Eu8e2bPrTy2XJuozURQDjYMxkegQEIP+7zImyWx15rHJW4/EOLb6zKMKfhdcefHQcP/IRzVdeYUoirIrMGYzj+EnBzc+kRroEU1DqkbAkN8HmvsCAAz34XSv/ykIEnN9hwlMYg5zmCypdL/jrFfcAKoc/PCJFIKwoijMMkxiFxITaHXxTsljq4Xl3B9/5C2XfnerxO98r0OBI0GBsd/Y+22fsRealsUkVakJkASAJBAG8CeAbwMRy2ZqeXm5dCTG0sozx5588l2uwE4rm4bnC8zXFFX0bccHT5Akybc9V5BVRShVKkJ3JsNMdzW1/NCxG+/oybvf7QnCZZZtM1+EXUoQ/IA1EAcCmyKu5flCXNWYYztnLxycvKUVWvw63dM7Nlz1RUH3RcEE7xQEQYIKE3iKAhyE4qAqChSHexYnZn7viTS/owZ+b/30B05Jd6Vu8UVht23bLJlMskqlwhRVrdGDAx7/AwgIzY40woZU89Yd7Ea34F0AK0VTmeM4zGU+c12X3ou/e85hd15N88NChn/GvfhdlWR6F8ZhgakwgcUEZV4u27/97jf+7eJRXlRxZGREnxPnfCaH3IwPoP7fGw3sAH3POsrj7rzuKFBg7Mknf8dn7A9Mx4ZyRwy5/mzh32DQCVVn1eVcOpvNFo/C0Bq+on/v+Lcdkb1QVGVmGAYAj/WmMiyXy9HZw9ktmwZTVZXJUCtWiscUrIdP3v1uJoqXOb5Xoy8hXh2TkgDeHmOVUumctYXst44VfY/Ue/vHRytMlWNQXkigChUG/j5SBeFMIgBU75195LHnHamxbOW5RwX83nLlpc/o2T16u+E7A3o8BgcdW8lm2cDAADMr1abjrifo4272wMM3dr/h4AAAOZCKikz/lmWZQEyXtJrW6YXUgHQcDXEBo4hBgnMcZhoGy2QyAXB7EvNL1hff+8a3X7AV4m/1O6mBvgvVmHaZGwiYoYPzsAwRfW5Iv43W2RQ8P28aRj6RSCxalvXfzPUeZCJ7ID+3/POtjq/zvWNLgb2/9ZRvrxbXXoi9T8C3wepjjxulMkv2DScXH3ywfKxGPf60J9+Vr5RPY4rEYGmpVqtMdhmdUXjgFU1jtu+ycrnMdFVjWsxMLj64eMzGu+uU37i0UC6+X4vFiCeEWs96OsPa6TPmWTbrzXSdffC/f3ncaX6ZkYGSHNcTHPzq9w8JLpJEljNdUX+0cGDid4/VHmv03iMOfhdf+Z6TE7uGvlOR/DFP9BiBj2GyZDzBqpUKbXB+kemx3tcHs2b4N5KuIr/j31Kd4lM/SQAatEe8B1octD3LsVlM0wMQ9KV1JlcOgPw5eB/+U0SJNjoOpxfYuem7MU/J3S939d903nnBH4/CFevLXJzIZK6EkQFje7yx97DxNwzfqTMGB5/jgk8zesmCSNK3rmkPGdXqtUyTrssdnJs6CtPqvGKHKDCwZ+xuNRF/UalSZqIsE1NuBIBgTpogMT9fTi4uHjswyYwP36km46ebnsOqhsFSySTzLYf87NjfjufS+HH2HMtmetw6puDXvXv4Uj2ReL9hWaT5BQcp+Mn5h+gG4KeKEjPLlbNzMwvHHfilh/tLUiKW8MRGWp8QmNZ9n7R1u2LcuzI9d+Jofvv37xfZ7q47bU18katKzJX9wM/gu4H/TBCYg00iCKG/NNhHNVNnaPaMgmM0IIZMN3Wqdis5CSSp8QAaMkwf5jr14IexwAzDNUe8EwBB+91mTLNEVsiX9v3T3/zdYzvEuzZ9TGKo76J4OvlBx/NE7qsk80I4r/qfNU0WMbII4ME59Xyic+CnfvzFTRaiz6qWZX1ENpzLj6VfaFOidG6oUWBk3567Xd9/kSsGNpFG4BcwJsZExJKUzGMKfgNP2n2nLbDTMV46ihA2mYhoEvK9uxB4xcP79lhrfr0n7brUl8X3R89ZLV4gxEKYO4nGrsdE1z97eXLmuAM/aH5KIkaaX71wVdtfPGjQdu5dnpg5ccDv3f9y2R8p3al/t1VR9FSBpCIAHzY3bQ4AlyQzL9Su6rU+fA6NjbSbMFSNn3CukW0F/BrxSZ4gUf9ZPdgS6IlBZKrqiizuKiw3u/KMD174zgeOFv9NDPVdHIKfUJM8N3h5VJveaHz1YFkTNuCzEARWLpZYMhabqlSqrystZDsBPkdrobf4npEnnXSX63mnRcGPMCWi5D+RwG/45N13miI7HRpEwCMag18gGfu+GjdTx9Ls2bt3/F2+JHwgKkTXCxicvoLr+aLrn3O8g9+G+4ssZAJznRMM/P7vVR/6hZTUT3FknzmyQFKdj7hXSJsh+CEakwMZCMjTHaCt8L9ToEmYBhFNh6D7g7iq2lWv+dXMEHUfcLBzReTzhY7ZBkZgCopBOgUPvIlomoorMrHkmEsziyd/+j3vn90ir2r7ayH4XelAIOAScZOn1JuTOaDzv4NG0H75z+ijXNthXekMM6tVSOK2Yxl/nJtavLntQXe+cNQoMPKkk+50PY80qY18fqT1BWByzDW/evCDdUjG6MIzxzU/Ejw935eLZupYmml7946+y5fklsBPwiH1/JeeCOAX3eDcsoY9dsKB39+8/9IXjjxp920Gs1VHZOywScMl0yf3NSFFJhrUwn/n4Fcf8MIZNtcGJeGwz7CRybNd8HtcLRdEy8E8yA6bZjkYKr7Eqotr93/0b9797KPG2RChF2h+LYEfFxyiGnNUyCA6NvH8arLCSmtFFtdjzHcp37FcLRWfXVpYfehozrnzrtYpADBxff90TwojPRus7xMN/GyRnQ4+gb3YCPxqAhvcDsVja6YF+Hmi9AFy10TC7aLaH9f8TgTwayRgRcGPXC0nktnzkk9d8Ukxqb1ZiikEfKHFohZeAZ8fLoQLc78TN21GTY0yAkw8j4JVosEuNVDkATJR7a8JM4/6+mqAEOYR1odNkiofPp/7JaMmWNWT2MzDE+/9n1888C92QXQWFxYYY4ssVUk5Bw4cMFtnV+3dmRrq/Ts9nYLP77DDfYNHRLXmegCs/TtCr3ogBCNC4AHCzI1KlSmCiAIB96zNzD+hcnbao+Dxfffgvj13uL734lqaQ7i+63zdoeZHgRnlYwsmAOso+DUyez6hwG/P2DuZLF6OIlSbgR9zXE/y2HGt+UXBj5vWT1if31s/9lYt033ypBzXBy3fpiT2dSpxJCeEzIlh0AU3LSLABBcAD+kIpm1RagH+M02Toi45UIIxE0g1YeDRd9cqxTSJjIkON6p51ifey47A7v/2PWx1IWsYxTK0I1EVJVHwfNGx7YLnebdWjcoHrNXSL3aS3aaG+i7WI5pfq8+Omozr/atRGq4DQDeIlEW4siLJLKZpzKwarFosnV1Zzh13TvxWaflEvg/g5zDvxWDOjXxRpPlHwM/Xq8c0abxVnx+PHhTVYzve3gD8PuALqBe1PqgoamkSgQqO60oee9mJYPas9ynzfUYFQ6wTxOf3jk+//zQlGb9T0mWBRwJFzW/rTIuhP48zEw42CLevVKtseXm5pvlxwIOmyP9z3MN52lE8q9dgaqAXvohHRwapvnXgXO8fDFMweHQkwBkAbJdN9r1v3Ml0UWXMdhn8Y8l4nFXLFRaLxZhnU+i2oQjiX2Sn527YKYYJ8Iulkh+0UQyKh1pv8HDQCUIEFyw43bg/dV0+Y0RD4I+j8HIUB7AdYpiaogTFsUzrpuzk7Hk7NafOc3aOAv17x293RPaHfG9EIxGjwh/WUXZ9dszBb9+eO0zBf3E04AUR1Yj2JJNZGO0JCiE69ZiD3/jIJUyWLhek4PBFI2qj4Edny3Fd2T2xwI/HDhw2fQZmz9VDJ0C05yVf+PDVQkx5A1ODPB2SPqmixHoVkAAxqgWG/0auTz6XYyurqzV/YH2QRi3aM6ynVzPhhb9sBn6H7xfX+bzqy6zxVAdu7kTOCgCkUi6z8soae/D7P2GC5THPcVk8HieQQP4gQIIOKxOQnGu6lvPa6vLqTTvB4toFPwIvx7kKFfhkScrIojQiMHaK7/vdPFUieojXaYFhlC20PlzIs0Lique4xdXYTB97qFMlZifWdCefAfCzBf8PkQdar9F3wG/7lO5tE/yYy16WOw5THdIjAyW1LtWhPsYisDAQ+N23emjmudun/s494Ygkub/jsx9cSPV3D5bMKpPlw5pV/cso+hOgGGon8WSCLc4vsOWVLDFZ23U2zEPbKRI8PiAmqBbD/w6TH7RQVVKZKiusXKywrmSKuZbNfvif32PlhRyTQ6dmVO3n/hUC/CBgJmdnC3vz+Xx+u2NPDQ1crCb1K+Dxq5fuo88m7RbCh+vZBcPrYnNzlejnQ2Njz3Yl9lpRU97o+p5muy5TdY00RddHwfDDyatkMkU1HUjeKDzgeswrV55VmM/+ZLvz6Xx/ZynQOz5ym6irZyBKciOzJ96I/YESXKxQOablwgb3jt/hyeKLLXZ4z/EkcZjM6EQiqjnYy76iGeljWdszMzZ0iaKplyPJmNeWapRLGZo9Hclj5x6PZs9G4Fe/k3kuqcLE+xYOTBzf4Pemy9/zotEnjd9d9W3UtmGuaxM9OPBxyZPyeXhAiShQIvna2hrLZrOsVApq7OJv9fl9O8smIhUZaqbO9eDHgVn0RapU4Fse0xEBWVhj9333h8xdM5jsietCynEQauCJSr1hsm61UL64vJT90HbnkBgZuFiPbw5+xDM8hqKyTv7QLFpFNazl2XvS2LMVVb3Zdp1+VARZKxVZpruLWW7gW+UCCmnqYQAMgV+1el5hdnlHtNnt0qTz/cMUAPhJmnqGE1Y/qo9C5Hd2wG9ru2Yj8Itq2Tzggznu8Qx+ZTURizdKcufCFffTKkz88cKBiedsjeJH5ls7rvld+pkrPyNlEn9lMZc5gl/T/DYCP2gU0DLw8+DBg1TXjwMelRKrS27faTJspvlRRReURrOCqjSqoBAATDx2kD30sweZagstgR+iJCvF4u2lhZUztzuHdsGPeZ6z6kopNjFhbPTurl0jL1d19f9hLQCAhmOt07pJ24PvJaL5uYb5trWZxY9tdz6d7+8sBX7dwG/gpF13+IpU0/yoiIQTphfxVIJfA82vA36H93Etqj6sIqQI4o/nj2fwe+WNr5SeZv3Boq8rvbbgMeQZbab58Vqb0PpmZ2cJBAE28FOR9FBXvmxn2cTmmh/AF7luru2R9qqJKh3Me3/wQ7Y8s8Binswk/7DmVx9cQJvA8ylFwCiVf7U2v/yU7c4hMTLwd3pcv7wVsyd8daW1NbuiLKfZBNsQ/DCm9MjAI4l06kmGZTImS1RNH9G169Yh1PxQs8+uGJcWZhcv3+58Ot/fWQocD+DHzZ61VIInHvhdwVNJoqBXH+p/vGt+ciIWb1o+D8QJ+N/xDX7v/cw//6GY0m5HNZeKazFZRdBHYEYEcNTX0AQuAPzAbKempojR8nw6ntu3Ue3JnWIXm2l+UDxR1JoqYVCLEpH8fXd86zYm2C5DBn8j8Iualqh+4s6DH3x+tWjPRrX1MAYE4CiC6Kx4zTU/3Du676QbfVF4JZk7RYHWBfl99eBHkjnAr2xeUphbuHKn1qLznJ2hwK8h+N3uK9Ifcp8fRSSHhaEbgB9TNOOYpmaEZs8THvwyIwMVKRGLbQZ+WEtJEu+ff3TiqBYD2ew07ajZ87IvfvwaT5dfX2UOi6WSrFBcq5k9ybEeubjPD5Vc0KpkYmKipvHBvMaLSUcT2zebzFY+bwX8EHYNkyeBt+2zpfkF8vfF1TiTrKB6OwefehCSyAGIAr0icuO+UVzInruVcUa/E2p+LYEfqspLgujOVZ1kM7Mnnj+yd/wLLmMX+IgSRBR32AEDn9WbPTEnp2q8pTC79Kntzqfz/Z2lwPEOflrJOqaFuDvgF+zXDvjxc+v7wgdu+MxqyTW7LNFjaiLGLMckpo9rI/BDROfS0hJbXV0NmsuGdTQBfscy4CUyraCQtSvQHESXsft/dC9bml6gdiWSE7Tu2Az8UN+uUiq9u7i48oHtsrpG4LfRM6F1GpWqX1YT8c3Ab+/TnnpzvlA4W6Y+cD6rmiZFf+J33l6G+/wAflbFfFlxbvGb251P5/s7S4G+3SO3iqp6ZisBL9S9I39soz0HTtrVlub3RAA/WVevQBGBGp+oy5E9EQJeGoFf1NdHQjP+g+YnCj+ZPzD5rJ3d6dt72o5pfvuv/uczmSrf6usyQ40+mzmM8ozQ1HGDtkFQpGBag9aH8Hrkx+m6XuviUF+XcntTbfztjTS/w3cHUZ6O5TIFJlBBZl/79/9guqBSo0qFoeFmY/DjOS4ACtkXvFJp7Rnlxdx/b3ce7YIfUjTmDTe2Gfj17R5dknWtH/3ToPUB9PBfsInDZOMw4IU0P9PYV5heOmqtnLZLtxPl+8c7+D0RzJ5tgN9xW+ElPTJQlRMxvVE0MQdBKAwUIX48g9/l137yS6bkv8ZVxdBfVGWSIjPK0vF8ChpB7h4TJSbIEvn3ULdzKbvMCoUCmT6h6fGms816zR1NJkbRqLbDYrKORE02/dgE++WD/8MkN/h7PfjVj43nuTiW/Uh+eh7BLq20HGw6RYBfLBEjs2e9mbX+i9D8kJYQt1l8ZmamutGDMyOD50uacoMoSwIkWgguaPqLiNuyUUUnZqYpKpU5o8R/QfjF6mPTv3U016LzrtYoAPATFIU0P17EIBqIwZ9CqQ7QXuTyMfWhcc3PFg4XWYe2AIELvmUIYhSFHOaXyoXqMc1L7B4fuQTgR90mwqve8sM1P8H1XM+yX3Y8NrPtGR+pMk0h8GvE9/A3gF9c01mlXPrp8sTs77S2g4/OXTui+e2/cb9qFJOzWireZ/pu0MFB8Ihx+o5NzFIVwnqd0JLQKSH06x2cOERJ5Kjhic0dNXVyM+jRIcXGbyEm4YlMF2V23/fvYXMTUyyuBOXLyBsY0fyiT+H1E+lzy96fnZp7307MJTHS+3exRLI18IPG5rps1ZU21Py6xwafJmv67UwShk3bpihPaH9YN9tzWSqVYtVSmUyfmAsqvJiW9b61ibn9OzGfVp7R3d2dcWV3QGRaQo7J0lrZqiiStFpeWlps5fvH5J7u7kx/Qh6omHYiFktLhl2u+I6YKy8vowL6EbvaAT/q1KEY6eyvssUjNqBNHsxTHX5dwK9/7/g7HeZdjpSgWo3cDcyexzP49Y6PGL6maM3AzwU/QU1gVfvZ9C8fPbXpVhgbi6XNtTEtnkxWKrYf17TSsizPbGax2uq+3RHwu/Dj7z+jf3zkNsMxmck8JqpiUBUFkYKuQyZN+Lyg1dmux1z4kGSZClY/+uijtVy++tZG+PeRzvPbjHDoFwim7xo2DJzs7ptvZ2axzNKxFLNNa8NUDK72g7nIouRVijtj8sR42wE/jN2xLCtvC12sTvMbPHlwoFRy3pDoSr/T9/00D3DhKQ56Il4TSijYByZs14MGX3QMd19pcXFpM/pt6fOennRSYmeqivZ7oiKealnWU+LxeMq0LFkURTEsOed5nuca1Wo1kUgeqFbKP3Fc70eiIN9eyWbnt/TebXypZ19P2q2qZ4oCe75tO89UFPkpiqKkPM+TsUlwBkRR9F3XdVVVrZZL5UdVVf2pKPg/qladOyrZ7Nw2Xr/uq+2AH3nkRT2d/dWvWgU/YXDP6HOC0hUIAAtSkja6FEHxHWbDD8JQIE9RlAfrLRBHGPzEntHBIMpQkWF3CdvJhMNnNosrio/8YllWGI3XxlmnNCtfluX/rh9varD3nZmBvsvXSiXiabiaaH6eZ9kvbab5pUZG+oxSbm9PuldYq675SiwmxGSFVasVgckKY47jK4rMbBDdcXzBcR4tFAq5NveLkO7t/R1Z1yVHcDAvga+dEotRfjVzGIvFZFatOkxTvOzyzPKBZu/oGR8xYQ7ayPoEHphOJtnKcpal0+mfzj706DrNb2xsLGZI7I9FkZ1hWfZzk6nUSa7rSo7jCKiNnMvlPFmWbVlVDtqmfY9pmnd2K/o35+oqVbVJh9rtOwJ+f3/txz5XNqt/Ee9Ks7JVQQFJ0uBw4DVZIpsval9CE7QclzQ/gB/KmCG3j3dGrxVbDh3JR8PntxnhuGbnmQ5bnp1nP7/nfgp0iYlBdwPMtdHFtT6Ybqyq8Uh+ZuHJm72r1c8Bfno8gZYq4qZmT7zfsmzbtt8Xk1U/kYxnCoXisK4qv2mZ1m+piZhKxeeRVykKTI/HqNIOgI9M07LMEO2KuSJXUVc1ZpaNS3Izczue4pAY6DkjFou/QZTEcxhjOvgPBCWMgRcb4H0esbdwxTSdFYtFKiSOC8BYKhXv0mT5qtWphSNefaZnbPhMTxH/UhLEsyVJ0iH09fT0MFSxw7i5QIfzQCXvBKGWwwqaY5+oquoz17vbMMzPFmZpzNsyjfftHr1FUOSzWjF7wqwo5CvpbLYlzU/qP2nX9ZbrnMddFFTyLlIOkICAtwHDZ0FJMpbQY0xTtH995KGH3lq/z9sFP0mqtKqpSn17dl3viwwF2NGEAVudYnx42hV4EV8jpDBhvLIo+fhcEqSPz0xMvK1+vND8bN8lzY9f2wG/3tGh12m6/nnLsQWcVDWmyx64ZDgwaE7VUtlXZFmQfcExK8Zrc9nsl1vlF7ivZ7RnzDC8A+mujOagfCHzmRbTa+lllFuN+WOt4nFmVKtfXp6c/dPtgB++CwUhgSL/nnf/8iNBqkPXnq4uxYtfIkjSX9mO06Xomoj9hLODn1CKkslkrXsPrIJwuSAmRPD8bDwe/0R1OfeRXC5XaIcG9fduG/yQ2P5b4mkzpucMITEaIhNMZcjvo8rsAD1RCroCUJ0+gYmKjGLnbGJqknx9tQa2YTUXHlb/RPD7QfMDgCmewH743e+zwsIK0wSJiXbAaDfqqsDBD9pSpVjaX1la3RGTJxYQzWz1ZJxqe9Z6H26wkpRHWamCwcJZp9i2LQIosJnK1Qr5U5CPCckvkUrSTwQd4cLvuBddKjKJJG3karF0+9r88rar1EQ3Yt/u0RdWLPMfenp6nl8sB6XtqEg4tGZZDsAtkaDxcEkbhwSHAfdgvGSiDQuKA1TQfNe27Qds096fn5772nYOSaPv9u4efZHtue/Xdf25YHw4oBgHFREPx4TxkJaqKLV+lPwztOeCOZnfL4eRzo5pPyC47v783NKWx9wO+Klgel6hFTCRuveMXs9E4TwNba1sO+isEiFOtA8n/zNFCTtoYO19YuHQNIDvccDev2f0Dl+RX8yb2eK7zXx+LYKf3L9vz3Ue86jzSLQwfnQ9MQdeUIMYrGEyTVWZXTH/dXF6BsDHy3fWvgbNL96duRy1cHcC/BIDva+LxWNfBF8EP0GfTvjcKfLdIYsBS8XizDEtAifXtF69ODN3fTt7OjbSsyulJQ6JqiLBfyqrKgm5iMvA83nheghDnolz5dyYm144f7vgh2A7nA3Xde9dOzT7vPiugZcntNgnfMcdkVSFAh7T6TRbWVmhMeFMcDcYLIf8nKNRAM4+GmvjUlR12i5V/jY/v/TVdugQvXfb4PeP13zsD4uSc7ugyExLxplhVVnFNFgCqQ7QFkSJ/oP0R5qcJDNMulgqsUOTEzWzZlTri4Lhka7wshnhfBc+Lpn5hs3uuPkWJllBWxVmekzHIfEfdzbokRz8EClazK0+o7yUf2Czd7X6eTvgxzUmMGIAMUAFF4KM8DuP5gQDB2MmEEwk6HcwLio2YDtUz1QVpe/ZknZOGyay5lMaHEzERffDoqq8IR6Py1xrQn4ogJaKJHg+pVuQVIgAKrRTQvADrFeiQJrfaj7HkvEEHRTcR5JytcrA2MHQqqXyTR6rvLk4W1xplcZL9ivSAAAgAElEQVQb3Tc4OJgouNZHunq7/9JHrW/Po5QQ0AxMlAqhW0GKD2iKcXJtlbQ/3yd/KsaN+6gNVjIJEw8BNg45gopEJnzFNN3/U5yby7Y75nbAj4quy9XNwE/q2zN6HVPk83mPQMwVlhyugTc6p+TrRjst1/tkYXLuf280j/49Y5TqsIPgJ2dGB6/zJOE8MNRasE+DalGgPy/kYJtkxUOcwieXD81uOF4EvKS6M1es5vO1725H80sPD7xW1tVrmCigVxvtb+x5LnxCI0NkOTWVFiWWX829xsitXdfOvoj1xkZVPX1QxATD/F0IuzzWgvMHfAzXBvO8Ly8fnG6q+fWOj5iCpqj1/VrXjSu0DJimea9l23cqonhJLBZTQXPsIVXXWX6twDKpNGl8JND6Hp0P0BRzx734O3gChHEIiiEQ+p7tXFGcX760HVrwe7cNfpdc9cGrpa7EG0RVYRXLYExiZNJElgMkPkgqgQkh6CsnygqZPReXltjicuAyqm8SWzObhH30tjKxHfuOJ5C/cn5yhv3sx/czDeXMHEbVXSABW54bmLPqewCGzUJt03q0MDUPk+e2TFnR+cSG+i6O12l+9RIo/zcYLSQ7ktarRlAZP6xXinuovJxl0d+6u7upqDUYOhgxzJ44bLIomaVc/vNrC1lIwjV3z3Zo3DM+dIrv+ddJifgzAGooZs4DnGCOwX5BtClJvtyMDhMoTLCOTT9huoGkHk8l6SevBctbZ+GnC7OLHmPlYvGg6zh/tra4ct9Wx40xS5LyZTWmPw0HVtE0elQynSJhgoQelOcLQZtoH4I0aFqrVSsF2hAsJIiiJY1V02gPVUplAm0ITZVi6THX919dbXPM7YAfTNlertQselJK9Pdcq6cSr8I+h7AHxowL+4Y3nm5IU6qK5H9q5cA0gGTD/d+/Z+w2X5HOaBX8Non2hGn2Ok9g55PQ5Ng1c3P9GHmbNfzE2oC5ij779MpjU29pNl61O3OJno5fAcbNYxKagJ/vWfY5zXx+6aGB18XSiS/iHFQsk0BAi5OpkACwv6eXFVZyLJVIUGlF5rivnT80dW07+xhmT1fSD6Z7uhQIi7FEnBUrZZo3zd22mQrFxBdQCJ95pvXl3PRCS+AX7eRePyY8F4DlOBg4c1RZUfE3Xiw/SKsSqGMOzjtV+FJkOh+GbdE55xYVbvokYQBlJxWFLATMZ59dOjT1V+3Qg85qu1+I3r9//37Ve1LvtKfLA8SQdJVZlkGaneC5BHYgKKIieQqDKMrULWBmdpZxExf37XFzJ74HIhyNJPdm8wczkn2JwQH+X/f9lK3MLTDRFsn3JSEUWxQ31fyMYvkfSgvZ926HzvXfDcEPtT2ldZ3m61aTH0jQHmY2aCck4SEEORRGOMMGrcnkGR466tsHyd60VnRd+/PFhw/tWDJ7aqDnebKqflWJ6UOQGm3/8HpzMxSkQgAC/k3mTk2tmQ6j9V8xRoA0+ZMti6wMvPM85oS1wjrSHpSkSqVS/eO1+aXb212P1EDP7+qx+NclRe6rOhbT43FquYW9y/crxgs6A7yhseJg0x5SA+aCC3mlGBfGCqaAnzjgmGexsMa6urrISoIoOTAE33GLpWLxT8pLq3e0OuZ2wE+wHCZnnOTig4vlBs+X0oN916a7u16FOcN8iznTvMIavLxJMr5bq8YUSvuCxz6d2wRI8L3+PWO3+op05rruAMgnDXNLqbNKmOoArUTcONVB6h4duk7VtfMhYJtoiSYf9rXWBMRIigKEDKxfQHPnM8WpeQBfY3NO+ICRfXsuMXz3CmhQtWduHO0J8Ds7N7Nw60br1zU69HpRV65B6gQAEGAAwY7XFcZZwPjINOm4zDXt1+Zm5tsCv1hPz5iWiR0SJEnGO2B1UML2ZTywELwaAnJC05ldNb+82oLPD5rkRuAH/oM9XDUNWkvO3/E+ss6YBp0VnAHOh7gPllJ0QkGdzkvVoPNCsQcAPTyPDpRP5mDP9T6cn124qNUzsm3wu+izl79I60rf7YrceNbg1aFUReYomCBQE9K22S9/9fAR79XXCiEgkJAfCeU7w/Y9JH1ATnU9JjsC5Sh+/Sv/QdJIUkuhoDNTpKDmpY/UDt8jRo3F5Cq6LlMSvO8Ujd/OLy3tmMkT74wN9FwUSyVw+GrRNtHAl/ogGBwkvrn4psKGga0dmgbXSLizGfTA7+ViicxAzPPXJEG41zLMuzXF+1J2cuvRlH27h59pef5dsix3B4wJPg6X9gXAGUBH9JcDpkRpMqGJhJsVubbKx80FK+wrmHLxDKoQFIIKTFvIZ6PgEkk2y4XCWfmF7H+2sj9wT3y479SeTNe3LctKQ3ADmJGlw6jW0nMgLGAPYB54P8ywVBs1lGgxVvhxHPRJhKkRjn3DoL1VbzXgQELACcZvOxXPds7Ozyx8p5UxA/xEVaGAF3oW2oeFzDn6LuRgwX/tFMqNyoVJPbuGrpU0jTS+egZXS+8RA6YG2hNYuTBZacwuG59emZptqkHxufTsGr1F1OWzsBd4hxe+T0kYsgL/ItYwrmjMXClsOF49Fn8VNAYACGk08MvBj+Y4pEFwvzF/PiK4MWbmeldlJ2be1IqFhvJsU4kP1jT7JtGeouf7rmltCn5yXLsG4A9OyvMZye0Q5mpy8BehQFnea1emZtoCv56RkV2ewg4qmiqTqwbpZjDLR/RxKiuJilwQXiz7htXJuT9rtt8Q7Qnwi5o9o7yHBD3QF4JIpcoymQxZeLD/U4kknR+cGeQR4ydpn2og5HIhmOJFIJyEOILxcUEesQxwPYWBeZ5t2a9fm2pdKNiW5nfJv33kc0Jc/Qvk9PGr0QPpcCCyLWRqKGXGOzi0cpiP7D0ijYvinyARYozQOqFWwVzrCGxuapr9/N6fUKqDwggMGHyBuCD8YWNCmsIBw8FLxuKQzphdrjxSXljZsShPTodm4FcPfGC2HDwwz1r0IRPI4d2VztBm4qABzY/8ZapKYIQNhvmaIUNnruflc6tfSWZS/3f5sZmmodD165bo7x+SdOkHejJxMvm+HIdAisydzCfTIQXjwJzsrLeuAsAAiIlYnIKk+HhpPqhDGmoeZG0IwZJrgFxSDFoyeTAprhjV8nPXNgnlxjMTJw0MupZ/byqR2MM1ESr3FtMCs5EoEVOFRMoFBhxyHinrQLNTYRGB5iQHfozQT4w5QJCKXvUghcMOX5TCxAW7Yj2/sLR5RZ12wI9ZDpMMpx5MpL7do9cKivyqZr3aSPDG/kdUt6KS/xJmcqNcuaowu9gSkOAZAD9Jk8/iwR74GQTHBZGiFDULN3u1SuDnaYnU8kMPBZFRwSVlRoeujSXjryI/WRipDK60TrBD9LKq1CpIgbY447ZlXZ2fmv/rzTQ+/rIjAX5iXLsmEDLCUoKYN2m88J8IzEYKGQKMbI+Jlvu6lanZL7XDFzcCP/C5moC0BfCrT3Xg+5dXzsK+Bx+hKOzQssGtOVxRIA1X04gfRCP8ecYAX0OcKbhB8LzaeQdfCN06hVwuWy7bp7JcbqoV2mwZ/F55443SPm9p3peF/mbgx1VqgApJvLJE5czAcI900epWCMD9TNCOouAAWzLATvVl9p277mbFbD6Qkk3YmnHQw10jBj40SIFgZjx8HeY2q1z9h9WpuR01eWJOUfCrB7v6f4NxYNOAQSGwAiH4YM7wb4BpQxILbfI0dpghIIGBQSP0G59RhRsNDL5KvkCY6UqlkuG5znvys0sfboXOuGfkqfu+WTWNc8i8I0m17tz8+1xzwt7gvqSaRCgr5AvhNUY5yJHJE7VIQ58a1gFWBj4n3h4LGhiFcgP8oOl7/g+XD0y+YDNJv2vf2DdTyfQ5lbDBMjF8RMLaJqWDINQfAgLoQ0AeNmGuRaZ6PpmSQWf4iDA3+KJwL34njbBBeTzai8BqxyXpFr4eo1r9bm5m4f/bjN6tgh+erwsSs3PFqM9P7N41dL2saedTeTu0EqrjErx6CcYBMOE+Y5wLs1z5bGFqvi3/SzPwA4MkX7XrsSQigA3L97RKtJO7mB4dvF6Px84nDRfRiqEvm0Aj1CbIHK1pNfM4raPjsrgoXT1/YBLjbdknvwXwa+rzI7Nni+AnOT4TTOcJB34bpVxhf4P24DXkxw7PNs4rTwXCXgfv4RHT3EWA9eJBeODTcAng+/gcAAjhHeeczKOuR9WAYlrs+vmHD7x6szOCz7cMfhdddfnpek/mTphWWgE/IWyGCp/BI4880srYjso9HJyhmoPAJFFQaLZPgS6Cw9gtX/sGU9DJ3ZeYbdihKTAgnSijZ6FLvhCeIgDfDVIDlhYXn8nylZ/v9ETaAT/uWK7l8dCpD8CHbzZoWfw+CCcUYo2qV7Jcs7WHPhFyhuMCmMAsbFetT+fmF9682RwzQ/3naanEV0ial4JorWjqAuXyhKYPSnOwAykQgMs3uOd5Fcd25nzme5qiDnmel4Y2BTDFGlAIN4JFVKUmRfJ0CTBQeg6ijkNNxTHNN2cnZj+90diTo0PnxVLxryBAoKermzQw0A3+vkK5SI55EpKQh4jO9oheU1VKDcFP+FBcxy3nS2sLmUzGM21rSNO0ZNU0BV64Pfpuok3kRHIAxNgRbQsTkm0ab8rNLn2mGb3bAT9oF75U4uXN5PSuoWsTicT5JGjAbOi7tBf4xc1kHAA5uCBIJ7ucvdpezrcFJHhuI/ADcNH6myaFvyMCFn4iu2p4SsXOLC8vQ/OT+/aNX+sJwvnYPxDu8JMCRkLGyWMH+H7nPkryO4nS55Z/dQjjberjq6f1rzH4HVI0VYqaPXdK89sI/KhesxqYNGE5ocA7E9HMwUVWN89dFAS2KktKtyRJg77vCwb892Ezcwi33J2AM8wFGXwXz6JYBqSBBOXU/FK+fGpleXlTvrtl8Pv7az/2BUcVLwBobGb2JEAJpbGV3Cqbnp6uJbZvxjSP9Odc++SOVhxu0lA9kTS/xelZ9rN77mOyIBEQCl4gkeMg8jw/rnWAmeN56WSKmaXyo6sTszsa5clp0Qz86ukFiQrMA50zYGdHhBTXjLAhwbjza2tseHiY5Qp5MrtQuD4irULfHwQBaC4wOeIKCn1bxOAhIFQrpY+uTi++vdlaDf/G3geL1fLTkuk0acnI3UOoNcAJYwTNQD9I4zgg+dVVij6VBNEprq1d49j2l4zl/D2IGOPvSY8NPdtz3T9VNPXNiqJo8LHFk0lifngHT47n/j8cGoAYzO7QIsyKMZMRlCdNbNDhfvApe//HYf5v4pCR4x71ZxFgA2DQA58vz0ejSj4A9HIFZm/LMIwvWrZ9bWl++XFjZoL/KkVR/5qJQpx8T7yoQ2j2ipp+Ar8fIm4D35fvuJNZJj+lWcmnVgtbY/yWYTqxmNOT/VW2ktk9fIMky68UIikZJAw1AT+q2i+K8A9/rjy3/MZ2NCi+js3AD3sBEj72HjRsz/OseLyrL/urX1X69+2+wfLcV4I5cj8RuVjcQAjh/UHpPMOKE2qRYZDU54sTc3+5lfE+AcDv9StTs//WDm+E2dNXhUOyqhxV8OOuAgBguVgMglWgZHj+Lz3HudI03G+VFhaW+VySQ0P9ouSdpcfjF7qu+3T4yUthsB4EG1hNsI6ISq9FSOPzWJyeXcoXWFzXP794YPINm9FnS+D31o99TOsdVOZN2e9GsbLotdEDuU1hamaaNjNH/c0GeDQ+D3x+gfmSp2VAy0M+333f/yFbnV9moicEUr4YhgXLQeQbvsPt1TiAABhoK6XVwmXGSv7vj8T42wE/ChiRFWIakiDIvuuJlC6AnCZIx+G8MReE7oOxY4OBJgjuwIaDJobvADSh4dB8wYiRt+l60HB827LPXJ2eaxiR2DM8cAZT5NvQ5gpAC20NfhmeKwYfHg4HPQ9uV98nOpbXiocMy3x1cXbpR83o2DM+9JuSpNzAJPFp0GLhYwOIQxPkF55LPkZBDCTKUEuzStXX5GbmH5cz1bNrGKH3tzIq9M2Yb7tUqQJAhcAm1K/l4IeDh+hMMr24/iGzWnl1cWl1szGfwpjwZVFRnkZaTgiA0U4aBIxhfixMihA4IKm7jv3q3MzihknO7YBftVqt9A73jDsl55OlUuk8mJaQZ0lauOswylkKEYJ3Z+FBM/QT0YeW/YXC7CKYTcumw+h6NgM/7AnS6uIJHhFb6U50j5tO5RNMEM6H5QkWF0SOg6liX9McQv8xziTl6SLQLswT81znmpVHp/5iq+M95uDnOK9fOfTEBz8y54M/oqBGsUi5fOVy2ZGZ8PFs39Al7Kc/bZo2lRrtf7+q6RfHEnGFzKUQ3C0zwA4piJAGuFJ+b6UaCtFJZpYqhTyTh+vLOdbzkC2B36Wf/vBpcm/8LjStjUT7BoOqewMBCxKmZZkCFSanp2qh4U8Enx9FPIXVNchEJshMFWXq4IBghO/ccTejoABPJGBEuTNuSqsx72qFmDXMicVCAVqMX1xd/Z1KtvCzYw1+AL5cLudKkvRKhflVxEBCd9VlWa+aZtIXhf5YPPYUxsTnl6rlpyZSSQHVOyjKLDRPkuSdCJgPmRcRVIIwfO6Uh4nSdh5anZ7/zUbzzQz1f15JxP4chRAol8moEgDx6iYAV5i1uJkPfjmjWJ5VBOUFhcXFQ63QMDOe6VbE9Pd9WfhNfkiCcno2mcPI5wZTpKzQ71grRCUyz7tr6dHJF9e/IzHQ+4X0QO8FhhPkQCJ6F+AP7TTdlWGeFPiwfcsJzHGmCXrM6IL6+4uTky2OebxbFtzv+bL4WzhIPMiDR/iRNQLmd1EKNMp4PMh/rBq3ZCdmzt6ILu2An+t7rm1Zt3mud8bQ0JC8uLhIGixKtMHcS1VHIhfOADd5ktbn+F9cOjT151sFEjy6GfihAwwJRV5g2rZNy43r+q2VSvWseDwuQTOFMIKLFxrgQRbkU4XpOQRACDyKKP3bwiOHLtjOeBMjAxfHUokr24j23Mznd4EY177QSsAL+fx+DcCPC0jYu6A7+ZcVlWWz2f1GNt9ytavUUO8lWiLxAZR7g3sjnkzQOaxV1uJpNYIQxmIEQuhaPneOmV37VjPesSXw23/dv37GUthfISlVqIvTrn8gl8b0WAwTZ9D8uL+DgkMaVF1ohdnt1D3QfHj+CZVik1RiMGa5wkqrefbj791DB08VFAI/D5svzHHi9TApKok6PAiUV+aY1q9WJmfRvuiIXO1ofuTfEwQnW3XTm0lCXSP9v+0L0rv1VPwVKLFECajw7+lBJBbvt0hJqtAAEfhDjEVizHZReuis8vLqbfWT7ts9OimqyjjyrgCoVBQgXHde7gv0g2QeVmXxS/m1s9rNx0MahS/J94qypCDEnfpJhkEPFEGKZH60d0KVG88nYSyTTNpzFkuxAwcCkTK8esZHpjxF2oVoRkqlQHk+H4V/Y6xUKTNfDiRPHhWMbjymWX3J2nR7OYSZ3cPPFJl4n6TKMrS/qN+Pgx9AFpoxBISwSn5xVdL768fMx94O+BHD9TxHkWSZ/DJhZxU6m6HWFw2JjwKf5LJrFw9Ovr5dn1n9/sjsHr1FUeWzKPCBlwwMfX6gQSCUBoIXVeypVi1d11Xuv6OKKKGZk/uu8Y5oA2YqH+d4164cnNr2eI85+NnOBSsTs19sh7lwsyd8fijMwVMdtuPzi3Z1aBQURWsQCkvgrb7n3b4yNdd2acT02ODX4onEubBE8HONwDxezSnqxoElAsFnlXzhsrXFlaaWt7bBb//+/aJ5cmZeTsQGKPFVWv+IRg+kFAdJYg8//DCZUnDIABg816adRdzpe/nhQsh6kFPkUvslaH/fvfNutracD1IevCBZmmM9X2ySPJEcDrMdEql9gbmWddnq7OIRMXli/gC/eDr5QWTrbFRblNMpiBh0nLwtbAp+/Dtdu4bfoWjqh6GlWQg/brConA7EkDSNyi+5pn19bmZ+XaRV/1j/PkGNPQqwqNUshEkyFDogWHDzXtAyyWeO5dyVn5x9nDbWytr3jo9+QdbVC1Apg6JAEbHYxGdFerBp/d7S5Bx8c3Sl+/v3qenYww7U/DCNon7tudkTkjiesZ0xZ3YPfV7TY38OjRuCBkx4VHouACYKdKGOGmH/PfKTGtbz1mYX721Ek3bBD89YZ8oMH0ppGVSCKqg+AyYDEy/M+qogXbd0cOq129GgaoLG3rFbREk6C//m+YRc+42uHTHTqG0plPr5c6K+UpoT+A7RzmNO1bguP7O4I+Pl4Ec5iaGhd6MKL2GeX3PNb9fQBYKmfgHCBn8mT+Ku0UMKAoBklzHVEy5YeGyibfATdOmQIIkSFTwPc07Br8gCV7fPRdv5cnaieWHr7l3DhqCr1NJoI/CDW4QKCVi26zvsBauzs03dAY338/AzHSb8SJQllZfX47EJ3J3B0ybgqgr885VbCjMLG1pHaH+0wlCi91z0qX98kdrbfTdMWDApbWb2pMRJVA8xjKBju+/RgQLQPBHAL9rJPWieKZIfA10cfvDt7zCraKwDv9pBCxecmBOa8OKYIeTWcphlVE8tzGePiMmzXfADcLu2Y+eYkm6nL1ZmdPArtueeBzMD95yti0QMDz0AEsnwXckUynFN5WcWdkf3C7oeyKpyK8APUWY8p28j8KPmu5bz19mp2ava3Zu4PzXY91I5pn0jnk6ReZU0mw3AD/cTc7TtdT6U9PDAGWpcv9WVhFqz4M3Aj5lbH3P3+MhLmSh8AyADYQM0R/ARqtrwi0voQSK56zmm8/q1Dap87BT44d0QIAB6lAaDupfQ9AXphqXHJl+zXY2vBn4njd0qyhJpBHyvUdmMkCHXrx+3GnAf8Ub7JBT8IMhivAC+9QEKW9lg1FIsMHt2wG9z8EPQYFhf95GVSQoA3NKVGup/QEvFn45gLEQgY+2pNR7ysVEwIowKptJnsFo43i9XJmdPafaytsHv3df/yydMkb0FPUHIKR6GvvOX1D+Qgx9qecLsSZJ4XfeGLVFjh76Eg0WHCWWTKIldZp7lsKW5Jfbze3/MZDdIhBXrgqG5tIO5UM7Jap4l9RjzLGtieWJ2705IxBtNMar51RjBBisZgp+VY0qmHfBDOa++wcEfFo1K0zhwSvCXJOYYJrQCP5df2Wss5Cf42Lt2DV0gq+rnBEkUWwU/wXWesXRodktVcdCj0PHVBQ8xyPCZoTr+JuDnWc47cxMzH6yNeaj/9Uoyfo0Lvx6vjhNq/fBzYSvAHErSoxtofoLt/PbyxOx/bWVbJoeS/Vq8ew4tL9EmB902YNah/KUQAOrAz3cd+5LC5MI/NZaUR24VVZU6uePaqMIL/4zmEZnfOhAKzyoka8rNEoQvLzx8sGnNx3Zp0LMJ+DV6XiNNlftM6f5AK/Rs0/5yaXoeQL2lYJxG70ZheVheHM/jXYc27Od3omt+4D9ByTTtSwuPTb2u3b3B7+8/efyzTBL/soIc3lSQNI9cZBQ64xc3g5Iv2vVz2YmZnh0Dv/3798uV3+ia1dPJAdcJKnAjfy96bWT2PHjoEOVn8Pwdbps/lkEvnClSGgb5xpC3xahu53/d/3M2c3CCaYJS8+twphA1caA4MUx3MUUjALCLlQ+UVnLv3uoit/K9owF+GEf3ruFVWVO7eXmr+rHh72DSyGuEqQH+Ttswfz83Pf99fm/3rqG3SKr6MZhbmoEfQ5m5IASaCW51aOnQ1ju0d+8ZNbSYrsHHuJnmF0QsOpetHpqtmam7hwbeLCdjn4yCHxd+NgI/ZrGR7OTklpvo9pw0VhEkMcbrO8LfiihGdEgJAq3CvNLQjOeazj/mp+f+75EGv1onClQvMkwrGYu9K3tg8p9b2aet3rMR+AVpII2fUg9+0XuJp8CC4PtV5nuX5g/OfrTVsbRy386D38ifC5r8+VbNnorP3rh4YPLqVsbK78nsGjhZVrRHIIQeTbMnlbtTVN8oFT+Um1n6u3bGHL03Pdz/j3Jcf5esqhIsOlQ8/rCQU6sFzZPdjUrVKs0uBRXYN7ja0vwuvurKP1D6Ut8p2RUWkxQq7QT0jYpUjaI9oZI+dvBgEB0XaloUARrmE22VINv9Htf60FtQFZUgf61skqb37VvvYm7VZAqiPMm5FtK6ro4fTFMAP6dioPSSX1opPKuQzf50u2Nr9v1m4Pe48liB2bNtzQ/v79sz9gtBlk7h4NeIEYFJU/qAJCPtwSvlCi+vZHO1Itjdu4beLKnqv9ZrflHhh7TXCPh5hju2MjMzu1Ua9u4etZS4rmwEflETJr3Ddf9h9eBMrRJP9/DAm+RE7FP14NdoD4QBRcyrOLtWZ2dntjhmITk6UI0l4hrAD0yQCkiHbYPwzDrw813L+Yf81Nz+7YIfP738+XXxa+Sm4NU4sM6OYZqe7V24NrfwiS3O9XFf6z5p7FapgdmTu0UoCjhS6BgP4BaP2nhDDZn4ITgSND9qou0YnudfVJreufGm0E/zGGp+iuf/zeJjUx9vh/7dY4NPE1X1AUEShR0Ev6qgq3qUL9S7RijATNUQDPeRtdnFd7Qz5ui9qaH+K9S4fhECdkoNwA9KFeEJtWPymVWpmqXZpaAx6U6A36XXfvRTbkJ9k8PcoCwS+o6hXmHk4Y3AD73K0MWB+3t40dInCvjBdKtJKoGfVUSOXp7d85/fZwlFY4IVBhpESlDxQq5YaHSzgGSuizLszIeyEzMweR7Rqx3wC/0edl6KPS6icbNB9p28+wEmsqfXFzUmASakB1XQQA4gSnwpqmeWq69fm1+qFd3tGh1+rawr/0YOdt6kk+dUhlV/6sHPN71nZaenf7LZ+Boy/l27RgSZzTjC482ePEyfmGd00zrexauHpj/En5ce7nu1Go9/yRPX+/yagR8ztj7mWG/vaKY7OcEUWaZ6q329lAuLVkkU1h0xS8LE6uJy7HcWJhdqY47Soh2f3zqzblhSjT8L68xTUjgAwbrhOa4rMfY3uemFT25ljaBtt5UAACAASURBVOq/0y748cCWx0WKhxGieD73B1JZO8N0nKr1trWFpR0Zbwh+VzgedkjA8Y5mwIvisb9ffGzysnZo3z0+8nuiLH2/dfBzr89OzDQtE9a9a3hT8INQZaO6kqreuPjYVNPmuM3mM7h39+d9SbigahqCjjgE9BmFywWFuEP6c7MnBYZ5/vLKoZmBHQE/lJy59Lp/mS9J3qCkiCypKBTc4YKBNQE/DBJFrPOFAiFzzUcUFjU+1mZP8hMgKMdH1XiR+YbD/udn/8WmHj3EEnKMoYo6EXMD8IP2iELWdrnKqoXi+0uLK+9pZ1Nu5d5WwC/KMD3H2RL4de0eWRFVpaf+YPPQ92iwEPLgrEoVmeWvWp2avZHPq3dk8HQhpt0ZBT+sea16PTSdOs2PWe7blqdmPrYV2qQH+16l6NoN8UyKQULkZs9oWa568PNd789yB6dv4O/LDPaepiQTd7oC+qYEzA17AMeMg36tkn2QSsJ8033byhbHnBkZPF8QhRvkmCZQMFho0kHBAYBPPfh5jut4tvW63PRibczbAT8Phff9wK7KNUD+PKwTxsSLnFOJKozJdq1qufT2tYWVbQNK98ljt0midAbeWQuuCvdFFOjIBxr85wqCUIvErbdIRPcl+tOFBbENURQuXDgwue3xEvglE1e4PsxCh5lvFARrPlTkJwZdHW7ZaD93jw2/hunKl1o1e8qef83SY5Rb2fLVPTb8alGV8Y6WND/J9r64PDGNfMgNL4CfpKt6VDiu1/zAU7FfzFJlPjsxM9LygOtuTA/3P6wl4k9GdD31UA15CPFmJLlbQRk8BLxQWpLrPZCbmH3GjoDfJf96xe9rg5nv2rrETNtgKrWxdpmPLu1NwA8HByZP8g8ilBf5V7IUBJiEkv9WCUKHpU7VjLboaOW5tSR326NGjqovstu/cStzKhZTkdIednc4zAweL+WB2PB3uZXq7xTmj6zJE+OoB79mZodQ83PzvpJsK+BluP8FaiL2PR5aHD3YUZrXgoVCOtlV44zC3FKt0ktm9+BJmqQ95suiUK/5oXoITMbU7RxRs2hBBFOV7dy7Mjn7vFbWr/6e/vHRm2VNPbtim0wKUx2i99T7ioh1ud6zsgcPa5qZwcG9alx9hGKdwlw3Dn6cQddSXfj4tzPmvePfFCTxHDIhhz3zICTy2oZE40iqg+e4vmM7zy5MzzfUjqOaXyONJEqPUPO7S/DZacB2Dn78e5RDh5yqclBsXJPQaR4tvWQ0PDUBKMuTc9sygXLNb11UMU+BCUGQB7P4xPX8uwVBOJ37+WpzDO/l+5OniMCigzQko1ypxhX1oqXpuW0BIPn8IuDX6Pxx8EMEuGc0B7+e8aE/EVT1Juy1WjBgJBCfnh9qtXDBKJ5w/+JjE89u53x07xq+TFTkd8H9QJ0i5OBdvPwYp2UNtG3vM9mJaXTm2DL40RdJOBSJ/pLHzl6enNlQCNjoRf27hl/gCsIdgizplJ8YmrapfCFPxwm7veN9qINrlqpfz8/Mv3xHwO+9N3z84xXf+z9yQmOO75Cpj4rNQgP0fUoyRRIxT5KlLuCqSjUl0fUaCcUAPSqwjP5MIHx9nkQ7qxneWx/C9bgk+/CGel8GZ+amYzJdj1PrIsnx2OyhKfbL//oFs0oGS6jxoJN4+IzgUAV+Sy6jorsDKoUYxfJEYXbxpC1Moe2vJAZ6LoLPoT7Pr1EqAnUzt20/bwuJzZLcozJM19jQd7Vk/AVIKq2XrKP/rpmu0WfM85htVJ9cnM2uq1zet3v0gKgqJ1PfvjCXCZGYtP7UtSAofEs98RSFQqNLhfx5hdnlm9ohTv/usbN85n+NyZIaJIsHXdV5oWOYRYgRhp3skZuoCWJp/sBkd7RmKN7ZNTb0qKyp+/hho4jWsCccHO7wyaHDBcYfRmL6tmGetzq78O/tjtmThJuZSM0Ha5GZPJQbTAkFsnlhZ6QaSIJYWD4w2c8Ya1geqnvPyK2yqp4JJheN9GwkBFiGaWX09KjpGVcLgnBuzRcfJtxzpkvnhSwkQRNRfp4MyzRVXbtw5ZHJLQNgZvfIrbKmnokIWp64jvdgPwU9JoP8R6yjaZpGb3/XrrWlwtWxWOxcMELeAxBpGagZixxJwkiY2Sk3UqwVMy/m8lVVkS9e2YYPEOCXSCWvQNWRjbQe0IsDiW+5Z+eaMP3kYO+Lkl2Zu6lcYqggoJgC9ivWn3cwIRMiyhKKslcqVodLi4tLre61npHB+/Vk4ncQoFezWgBQ3cPt2MKam1hf37WdK3ITs5c2e35mdLCqxPUNNT++Z0CHsDPMz5aSB5/Lftp43270rt7xkbv0WOw06tOIK+zVWMW/FYkZpkmR9lRy0fWoGW+lsPaewvzy+7cNftS+yJqfdhRx2BUgkQYMhDp9206t3Fdtw4Xti7BxkduH8kPUrVcSA9MnNmVYELcm6cA/HTZXbOfnVsAv6rMSFZEZZYOltSQkNPY/9z/AZiammGgLJOXWm2UPF/EO5+AHye9WxbiiMLf4rlY343buawf8IAkpkuQvle2WwK/vyX2p3EL1c0OjI69EJRNoIo0CXfjfqBM5FV6mYtfZtcl52NnXLUt8oPuqWCz+RhSDRn4o0idk7B1YAbBZUbTYMIhJwYSIPVEpVbKiLJ5Wnll6sBVa9YwPnaKp+t224wxJADzXqfVYpH5hMT3oVoEcTi+o8lItllhK1r82c+DgH9W/IzMycJUei70RzCJgvAHOAPgQhYmi3GgEDIYESZN8c7a7pKjS6YsHZ/67lTH3Dg8/VdCkuz1JGAZQ8+o3+C6vuco7a0BAIO0TwVWG+dXV6flXbPQOaH5MVc7kjLnR+kU1E+qMPr5sJub7v5rJZM4hQcRzqdYrGHLNLxj6BKNuADBS0zQtkbF3lCa3FlTSE47XlwQKoIPGBvCD1hQIqQLDKLAWqXiCLS4Wkmxs0epeGvoPUVNfyuRAMKE6tmFdVwjfWCesNz5D1Q8AR1KLoQRh1XW9i0pLWzPZJgb6LoqnE1eS8auBv4+vC6exY7lnrzUBv97dw09lkvwQr/GK3FmcPcwF4Ie9ml/NkRY10NfHVpazqIR06crE7OWt7LPUcP8LNE27S1IVFetKuXJhXWISrsLqOLUC8+WyZ1eqb60s5ZpqyAA/Nabr0RiIYL0Oj4p3POEWBaNY/kJxdhF1VVu6EkN9HxQk8e2KpipcsaJOImhMbBrMk4N8ceQT4oy46O5gu/CZv9DI5ps2f24p2vPCj172/MRwz/cR/SZqaEVTJg3O8x0q9Awmhov3TuPRYZZts0cffbSmykeTVrHByZQR5hHVAih4IEWLP/HeRnlczSgbBVdqO2M7zDNdimC98xu3MbNYZik1sB9HnepRjQ+aH4inStTCxrfL5edUVtbub2lFt3kTzJ7Q/CCEk9miySqSSVaSTLlo9i4uLpY3eLXQNdr/v5govdSxnL9O93SNBkwvkPbrTWfRZ2DdyDxn2dBOvrI2vfCqxwHJ6OBpiizfocZjYr5UZKIqUy88XrYKIEId46kkVVBxArVSi2trWZH5f710cOarzUjWu2vkXEVVrhIlaQBdoaEBgDKYA/XuE4UAXMPu7ng+co8GenpZcXnlT1bnl/6j/vmJwd7T4vH4XcizI79X2HCTd5gn+sDp7oZ9HEOpU/D9ZdMw3lSdX2k65tRg38viycRnHcEfAJ3rTXhRvxX1RCsFxb9xyM2K8Yr8zPyGzwf4CYpy5kaNaDHXw+ZfnxH4oUXQvn1aV7V0Y7qn62UIuKEcybCxLAmMEfCrMfiwwLBZrpgSE96Rm2zfpNi3a/QWD53cG4Af5l5E8+J0Mmhrg7KDJTvFlpdL+/bt04qCe2PJrL4MOccADZ7sjFxJ0vC5pi9KQXssTYdZHZaGqmtbF23FZ7kR+EUZP6cv5dluovmBdfacNJYTJDEJoKd5hP5eXlYQ5wFAjjngd8uycnbVeVF+tnluaV9fX8qKyXfq8dhz0CYIBeXhH8P+ImtdNTBh4wKtecGKarF8+srU7N3Nzt1G4BelA7VCc10aOzV5Lldwbm7W5NgbFh97bEPNtWffvrQkOB8xHfs13b09KvqQ8mLWVOPVtlk8lWQmhG+ZWl1RA/F0PIF3zOdnF8frrTn1c2kJ/D5009XvWamW/tHXJKbGVVauloJu2+i5JAVMi2o8hsWKOSGR1D49M7OumgsvpUNgx4MdtgkGzZh/9NH1/kF8RhGAKInjSWxuapb9/J77ydeniZGGteukmcM1KEh79UU4cw8V55ePeJQnn0sIfiR51vto6kmJzUf1VcvV69Bj0LFtMaaqTJEVNb9WSMiaOuB63j6BMd0TBURXBFVNRJEkK6xzdDPXPx/5javZLLUkso3qK/IzSw2Z8vC+PT8pViunJjJBS6NCpUQOajAiADS+T3mgIchA0kV1ftu2feZ698iydL3nOPcxX54XJMmz7fKQqqjPMU3rVbKqPk/RNY16AsI/hRqevGB5RAmlBrnw0cG86HrMKFUeLs0uPn0j8+HQybt/IkrSqdA4EHm5vLJCZlQwJ6p9CY0D2isAG+OGBlgh5uQ6pnmvZVs3CL5wrxKT56um4SlMHfJd77l6XH+V7Ti/K4qispHmwPcq94nSuLEPLedXq1NzT9tozFgfgImgyWeR5bBOEq+BFtfNYVpcMw43sz3lFFVbnLmpv3/gZZg3rwPZyKSOZ/H6vFjDhKabRtl4x9pce1GgPePD3xI19SUAWm7C5Jof+EoskWCra3nSgOyqyfSyHW2+q/b9xviNAhPPJfOoqpJ2Ts2MvYDpRuu6ojg4dXvXyI9pMNu9MNdmFCgsL/F0qqb5rWP2IUet+c7AGzcHP9Y1OvgDUVUQkUn7Fw2Qcf4wH25RA5BT3WG4lILu9ktGpfKu4vDylxqZEmFOlWL6FaquPQstgDLdXaxqBY2t0Vwc50FBG65SoGVS9wvqTOJ5drbQVygUck3Bb2SgosZjMb7PGtEB+5bKHzounW90RsEcKpVKPqbq17med4tpVR71fXVVFMUuxtyTmchOZ5LwOstxBgHWVFg/nSK8AdDheXgWfsdZxu+ZeJLGv7aaY3FNv3Lp4NQlm8FKS+D3nqs//HUhrr1M0GVWNStMUqUac/FRIxU1McOSZTV/iuexyclJqqBPzAEaWqSyC0N5mp3w+5Hh4fFX7Ww3mCE/yKS1+BJzqibrSmTYzV/9OnMrNlNFidkIeEHngvDmw9pP8D4Bdf3wi+2jx9rluen5pvbxzRainc/bAT9KL3FcAhXqxl6pMjHUuIlBuC4zvbDcHMrQVau16iK8eOxGYyPpFj5RRADKykNzjxwEkDQsIZUZGHiFltRvcmElhvlbCZrZBjT2SZLjrZKoriVqiqLFFDpJhI1tESSlBp2hfVVVYRQTJFURuJZKPh5JpIMMxsfrjmIP8pZJdLgxf4CX7b8uPzv/pY3mlxweeEVM1/4dDAPMiBfVhWZJEjlMSGLQmJekW9Q5DQGQd5DAvPi+x5hN2/IlSRJJcEQXd+5bCwdBmjb8obUNHNAAplX4/ayK8bq1+aUNx8zBT1Lls1B/tFFpumD/Bi+kzvMxI7n4YMQqcApTU7m+GzVNPxc+lWg9Re4G4KkPlPuHnpGJJCvkcrCWmLIvvqOdtIK+8eFvCar6EliWOPgFNTmD6E7QClU9qJi6JPtudi21zopxyilqem3lRkVVz+Ul4mA2RGcK6r2IaEDDoLZIZB7FeYBQgPxeJhpm1bww1wZg14PfRmZlTt9WwG9o7/h7q6a5P9PXw9bQdUQM/NUwf/PuJ8irxgUQBH2ooLOmgS45x7Hv81xvzvN9h0linyLLz2SiuMt1XYk3d8YeRtEE7FnsPXyfzhxM+mF+HJ7NHPfe1UMzmwacZVoAP75fQHO4NxAshYt86JaNudmSIguiKIq+IAi+73uiLEmkTCFgDZiBwDghmC/OGsAfvAuf4XylE0kqig8Xiuj61lq58BRjsbBpZ5WWwO/dn/3QbcmB7jMMz2KGVaWK9ujmEOTSyDQRMgFBikRVeJRoKpXYoYkJqHcEfDxMGZMA88VFvr+wisNWzJ4BCh0GP7wHT446nBppe5zZQWuTPcbiks4OPnKAPfCTnzHZCyM8hUAKAntYH821HvxEV2BWufyctYWVH7cDYNu5tx3wq/ksw5B8MICVlRXWk+mihrVk2goHA8YT2NMDrR5rykPtG42XIs8EkYSF3MrqeaXl1aYBKqNP2ff1qmm8DOY4gB/WnqKAwyRm+Giw6aE9kZYWahb4O3rZ4T5Id/iMGqjCtBWaiYgpqEGvRRwOapNkWYG/J5Q2uX8aQTWVauW24uQCFVNudvWOj3y9q7v7ZflykbRh3m+PulEk4lTejwqbw+yGYu28BVG1GjQDRh6SiHB7gw4z1oOa7sbjNaEx6leOmjspUjeMyIOvT/D8W7MTMy/ZbMzQpBRFfYmDM7pBlZRaAJjnsdWSlWR1JvFTTz1VmVicu0lSlXOpfVNo/gUzpmMXrhk0d5is0T+vt7snDHpCfyf/7SsTs5/abKz4vGds5GZJV84G+KGZFvlwSJ0IgB97BTSkSkKixLSKk2xgwle6dw3TeAPfaQCk3OSNVA0E3fG9Q6UZTYsKWWiyYlQq5XdUlnItjTcx0HNhLJX8p2gqTP08o8JFK+DXNTDwvxLdqZ+vlUuUxxZ0MHCovis1cYVmhkhgA6QNeC/1eAxbgWGv1XIOQ2ESpnqcHZAS+xU/S9UKS6fTQTd1uAb4+SDtxIdwwUqruXeszWc/stnapUcGylo8Fm/m86t19VG1oFgCYgMg2Loupc9gblgT1LTlAWW8+QG0YMKHcD6wFOHCeSNaoBl3aNYGuMJHHJe1f54/cOjCzcZOe7iVm/Z/4SPXCDH19RXHYFJCpUVB0AsKW0ssMHtikNQ9G4MRGMsuLbPF5SWSMGtVJHh0Z6QHE6+6T+2C2gx4qR97ff5Z9PNGKRD4m+wIzCxW2Pe+8106cEhxQPuNVCIdBDTIYRmdWpRn8FSu+XlleyI/u3BUojz5fLShnotiqeQ6syf/rF4KpdqjscB0gOhECgRQgzUrV6vEHKhNT6lEBZWpB57r0L9hdsT9uOrz5AIaMCaYNvM9/4bVmfk/22wvJfoTQ6IS/0EslTwZgEuNZ2G6CHu2gYHisPLoz2h7HfxOHbhh2+fd37syJNlTmgQEMKpRHWiQFLUIfygikeXAl4FnA/hyK6uTsaT+/NUDm1dk6d/TP7SyWv5B3+DAyVSUHZ3uIZGHfm4yy8ViNC7MhXwmXV2HpVT4aDIZZlSCGqmYB74PUw2YNB83p109ncHsofEx1ztklM3fr66ublpFBuAnqepLeMRrI58tN8uhpJxcNBNzc3OVBuun9I6PIAT/XASV4DkEqBHwQ4BBVzpT63UIWpAU7vumazt/W5pd+vRm+6J3bOSbTJfPQfACSuDxAAYwYwqKEgRaZwgMmiAxb6XYCPwYO+UUtbuYu5FJ4rmyrtUKm0MDLFYCdze3UuF3tEkCv8J4RTStKFfeUVlY2RQAAX56Onklj7ZuFlAEzboV8MN40sN9d8YTydORptPd28tyxQKj4K0wcp6sCwCQ0NznmTaBFUWBhkIknoN151H4mC98pgBPnAsCwPBswxQKrUrVNOqADsHYKJVXlZJ1ch5Otk2uxOhAKRaPJeqtC5wetZQTSaKIZbgy4PfDPKgFHLkfgkpfFNgVWnt46zSKtEYNz7DSEb4HngzwxnwAgqRMhf7KfC73aNXwnsVyucJmY28Z/C799JWvU1OxL7oKNr/LBBUO2dAe7QS5e5DOeJg0Bj83N8fWyiWShLlvj+f14T5q2QGfSaTbdisD3so9DRk3VG9PZKovse/cdTcr59dIioppceYaMHkGPeyE0Bl8OMpzPfjZa9UriwvZTe3LWxn3Rt/h4BfwoPXyS/1BxOe8GzsYNAcU0mphXkPSaChZYl1QsQYbC5uxZlevSxeJSrWC6fxQNJ0zmgTTrJtG756x5ziee5uiqV3QpMgvE1Z8gSRIoBD2S6TozNA6gAOCz8BcyTFfLgeBNmEgBg8+AcBx8wj2HpnlLDtgBkEz1FxM0l+yODHRsB1QI5qnB3ufo8Zit4iK3APmjDFTtGh4+KiZbQi6OIj4Oz4H08J7+b9hNuUHG9of+cgpVzas2wlhIlplBVokE9AfctUxzZesLa7c18o+6hkfuVlSlbOpsDV1iX/8tzj4IcBouWQlWGPwwxeV7vGRmyRFPhfgRME/Ee0P5likF4CxYm0gZEF4wR7KraxanmW/zc4WmgJg766hbzBNfWkU/GAd4lo0aIXnEcOyXWh+G4E1Y6cypTs7cqMvCi9HRCAEFghZZOazA58RLlidZJTDIpdA0HnGtR3TLFf+1lzKNR0vBz8XfDdSVi1K5XZ9fvjuwO6R35VU7QeW6wjQpnjSO/YHN/eRxgqNB6Z2y6ZuMlhDog2vNhPGUiDVBeZ9Tjsyn4ZR+mQyTcQD9wDAksyd8IOX31meW64VeW+23+Ij/cV4Ip5s5Leu1U0Ou/pUiiXW39/P1vIFGie5JgBqUmDGRE9QDqIkXEayCEixcoLgNQjuAG/ux8VPBEEJglBlrveS/MxC0wjPdWvUymG65IorMvqw/rCUUIdM3yazJ5ozkYQh6oENNozeQ7QdGCz8fUV0zw4rVNS/Z33uXCujaHxPEAbQ+HDjr2B4QSsWjzY6mdNgNnACLfXHP/gRK+dLFIVEofYMnYeDA0EbLGzDg5/kQ1LUw+q26/rVfOF51ZW1lpjS1me5/pvaQM+F8XTyQxA4qDdi2G2b2/Bx0CF4UKh36GfFE6LaLzcz16dyRA8RMYlwzqTphEwCIeNkdqgY32Ul4482c4zXz1vv736Bqij/L5ZO9hrQ/tSgqztpaWGyKjVyDU0ezeiGvQZw4SYUSPMc4GE+JTMpTGCQNH22VCqX/8RYztUKb7e6JhhzJp3+D9Nz+hEqzukE+qcSCToDvBIK+TLDedTMg5EX1TQxRCOGplp8jP1H4EhpDUHyv22Yi5W1tVdUc8UftjrWrt0jNwuSeDbGyc20JFkj/QNpBPh76KvF6VHL9sZggpeeypTkTO9Nid7uc6GB8V6G1JYs0lMvarLlY/UsxzLLlbc1A5S+PaPfcGXppSbKJsZiBKZdmQxaZBEtAH4YM/YzAl5izcAPLz6FqZn8wFe0RPzlAGpYqmAyW17JUuAEN7eTmTrMowNdYCGorBUNz7TeXmkCgHJf6sJkputKSZFF8lGGqRa0hqG1IUj9CfJWS4X8SyoLuVtbWb/usf+/vWuNkassw9+5z8yZ2Zndne0uS2kpmkZ+NCSUaNQfKgIRBAWNMQE0/PAHIrdwCVqiBiTRphj8Rwj6QypC1QRDjTYKfzDKD8OlUawo24vd7q27Mzv3cz/6vOd807PT6bKznZ2t8TtJ0+72nPN95/nO+d7b877vxA90w3jECX2GDh8Q3AhD8O+UK1n8HePFD7rdmyx1x2XZbJYERrJoAsXSecPnuLJPvVp9zZ4rXbMamSo5TnpitGqYmRz2H+wzFKNXo5AEV1Rh3FD4RFbQVhShvbZCm6wmRAp1rEjQ95F4r8gtilKasfcnMp6ivQnvR7NW91zPvas5X3p2LRjzc9bk9sTJe57Zd6tmGj91ZV+VNJmSC6norRfSSwlNHLlb0HjRrX16dqat/XZuvLRxdDSB7GXS7Q+LAnwrY3JJqwTnIVcPGhLhGXdbz5omtVf665uHWa1UbQdLYZpD/NFLEZfN4fkwWBBsaJQWAcGJVA/HPbZ8YmZgLE/+3OZE8UEzn3sSbgLqVO570YapyFG377g6CGmzsXuuE9821b3Dcuw8j5SGMKTAOicLELXYsp4pybP3s+MsimD3eAxv3borkP3nDTOzC5sbaXAg2xhRMjPXDsnVk3CHYxge2+UCCFor70KOtcF8qVoMdYmIuqDXystvB6F/e32u9E6PU22frg+buzJm7vlcIb+LurlDWMeWJsbihR7wscMKwgaQjJkm3Y8cf4qxxow+TjlvQrPVdLhK33Id+ytOqd7TnEd3bD3IFPnGZNI8d5dhDfnGAlzg7TAsf3XhFyGg6cXCL0fGxz4PdxnIULQWcS4e/t0ZtuDfuYLUxHrj7vrs4jPdsB+aGHuZpfWb9EyKQRnCHlIrL5ObnnIbVSS6O1FusaSwpdUt1WiI3bu1/Oz0AVlXbyFLIt6YKX8Rrv0475hv2inCu0VjWvWG49n2fecSgGj2HGrKPs3QZQgn/ty0P8RKIs2V0qhc+DVuKE9Nr0n4YWscmii+kC+OfhlNjXnFH/6uc4WQFAGQqd6nUxMPCVDKEzwlcXoOuU7hVUD/yFSKLZWWDiu6fH3zxOKaO5OkxkeW88OFPNaMC1PKGYSFLUeKV5sM5vm/UxVV9XzvWsyDBBrWoIvlvKKCVKxw4z3AvTh5DXhgT2pWap4sSw8vHu+9c8eahR8G+/aPf/hQqMmPaxk9Dc0cLjKw2zzksoCoECeWnpg+SdoaNDhsAsmjHWhf7w6UuC7aTCImKT/4A7U3d6rNGUaZ/+kMJQn/452/syNHjkTWQADfhUL+f17qJyK6RG4E0mrQedyPBB5iOrgPNLrS/Om9rdPlb/bhUXq6hTGSe7BQLD5JMVZdJ6xJ0wT7MGQUu4MVyOMl3W7eKfyS7lMeUMd1+DDwkiIukjFSrLJcfoMxaU9jodQuYdbT5JMnF4u5lBruVQ39TtM0aenInWlEbleM20mISm6y/FbQbinuZlNPweijQsIz3k3bCZrNxtNNT9rDSqXquufKLxwby+Y1aa9uGF/XMikJmyr134vjjHyzIRZnbHXzHDl+C3LVxpotL6SAc8GEy+eGkHsVOJb1tOoE31pcXKz1OmdzcuygmcveCDcrj/9w13Y0TqRswCsS2G5ouOFK9uS54lDWwAAAC4RJREFUBtzNtNz8+C+GCvmbES8mBTDu1IJL6DkT+bn4HW2CIDM45Mf6RuXUwllNis2x0ZdzxcJNdcciFxywQzI65olvlyzqfETSQCHedNPLniNG2TlzbeSSyQOart1CmCsyQz847tHhSeSREu9HlgUU4CCENeEEXnBvfeFsgW2M5B4whwt7LcdRwaDE9VAkoLxFimLkDUM6Ailjjnd9aXr2UA/rKKeLw3uzuez9qqGrSHnAnPGt0+afiu4Poc45E+e6N1fEYABwIhjOhXt6ND9MhR582zkUBPIdjYXe2oilioWSljKGc8MF2uvhfSEyiqFHXgzfi5i66TRr1BrPNU/OfW1k5/bnZUn+Ep8/8ZrQGDwmRq6QFbDKY3cnuadhzCDFDjFwHF5Qsar1O51y9cUesD1LVqz52see/dG1luQ9xWS2TdU1Q1EUHblYmqY7gRxWatWGc2pmeut/abssnc0w1/FWfBEySawkL/N8fj5D5e58AO4MhSDDC+00W+zE0WPs+NFjzAXNHEmvNthCGgk+zqxLCj5MlRYn1pagjWNRiYbvB6HXbH10rXGYNQO8hhPzE1se0tPGPjDBeE4Tj43xnCD+op/L8uPDUGyiM254poBwFBNhrCVJ0m8dy9pfm196uZ+NQXHz3LbJj7u29Z1MJnMdbUBGFMzmVlNnMksyhkXl22I3CM/fI/cLqu647qHAcR6vLZReXwOsPZ2Sm9zyMVmWvuuw8DpsgNTQuFpd4VriMXAuGDoHIOzjJspxXDxsVGuHUqr6RGlm4c89TShx8tiOrb9xg+Cz2BzBekxW8EDMBOuNd7lRrVHcyynXCuU1kgRgAWbHi78Yyg/dTB1NUKd3lZbuELB4TjOVZvVaLQht/+7ywsIKUsnkZdsP2iy4EdV/IKBoX7NstAiLhCsUbdehVBO4mGfnSvkeFBkts2XkxWw2+wUSBFmTBAjCNHjHSEDH9HnOqCQF10hh3v7S4uI9dqW+Yr5mceRBfH/Z/BCl2UAR4DnOHF++QWNvYWF4/enj070IP5pXYaL4KdnQvi8p6keI2JGohUzudLS+Qjime+SH7oH3CsoDjBQqGACXcqFAAqRWXj6RTaWeKJ2Y/cl6vun0SL5cHN9SQCoQhDDmBEEHNjm+B2IqwzVO3aX8/UtT09TM1rx4/H5Vkb+XyqSzqMQENjGOdswy8S7jf8hND49bTN5DqpPneK+6rnOvM7t0ZL3fSU+WX3KQh/btM/NFfdKyrGHLtsPqcs1dri06C0uV244em9qDUo+KCqtMjtIRwpV/Syjk1+X3neet+nPHU59F9kAXYdtmcCNFZb4iNwQsBbg4I7cgZogPOIhTGyJGGK9pyLsPwEokyr1lRy61kB2fnzoxUJZn+3EN9YHR8S2P2Y6j6bpOa4gXnLtdsOlms9kQH7kir+C5nm14nyk0ABkDF2aVheFcEAbHw5D9TQnDt8pO8MceNpv1vossU8xflcvlvxqEwc26rl8CFSkpvLulrbSD4VBgJCl0bHvadd1fG7q2f+nk3IZX3MlfdslVnm3dHoThLaZpbgOI2FQRZyF6ecIt2FVBC8IwcL1TruO8ZPvec+5iZV2tnJL3zhaHX1JTxnWSqshBEMicHYtNr1VvhCnDCGuVCjPNLCztViqULy31ZhVr+YmxF9Lp9A2wSlY7YAgikbperQWGqoWyLPuNevMRt9lsW4DpfO4lzUxfI6mK4gW+TK3Fms0wn8lJ5M7W1LDh2iHcoZVKxc4zbVuPFrGW2zL6c8y33mxI3O3G432GYUhUl1hRQs/z6I+mqqHnuKEmK75ttR5pVurt+RqF3AOSIu9RFCWl6bqMb7BarbBcbkiCqxvxRd/z8KySY9muY1lfbJQq6/aUjG4fv9pzgls1w7hJVdUtXMEl7wLSULosQDuXOSaLwHODeTmW1Wo2m69omnagkRr6FXvvvdiM6v2zNXLmDNMUM5VOq4ZhKLZto2e1ZBia5EeVXQLk7fmuF0qydGB5ZqHdieKiHTu2N+zGw7Kh3R5K0hCYe1zx4UKbW9FoiTdSKISWZQWtRuM1TdGfqs3Mt3uG9j7z6Ip1C79zDXj5Jz/8ytTxY58ujAxHVPqEOyR5zSrKSk/P0hk77PYiUHFcMPNCxvLZHLkiIssCgeRY64hZpyT4Yrowd+lAm4HwI3dRRPRgvuc8WZsrPdzTZMXJa0Ygk8/v1jRtt2roVzAp/ABj7GI0lw8lZkJZh4eUMVbRNO2UZbWmHNc7rEraG7WFBZCPulc+WPPo6zsxU8zvljVtdyZtXmFZrcsMTd/q+i6KZptwurGQNZnEQMM+xZg0JbHwsOc4b9QWShsx585vu7MMLn/IztTY9T28uGoQCMj5i4pXuq5/papoH9J19YM+CyclxkYZY1m0FY0nAY2kFchhmYXSvCzLxxRZfrdeqb6dlbS/9Kg4rPZc5/3ujI2NZR2d3cCY8glZllC56NJAYjkpoI25EvjBbCqVerfeqL2uGdofKicXpvoFdN+F3/jO7TUmS1mYwqgkQEnUMWEhOel+xP4weSSqR8IqOrirkn4XPx2EGOJVGJNo2ZpOVhxR+fWISXXG/Rexkzj9Hv58InjYTpuFl0tl/GP/PHo5s+1/9WshxH0EAgIBgYBAYHAI9FX4Te6cLHqudJpXWKCUCLh+Op6n26DrTXKXYuHHBV9nwiWRQuLAM4QaSBA4KE4E4SxFrNUVwi/2X9N1ILu4UY4JBCCSjq1682Bt7vTnBrdMYiSBgEBAICAQ6CcC/RV+k5NFX1NmPRaoaICJfktUV8+xqQUMGIi8LA+vWsAZcUmWWCdr7Fw/dwMimUOF/+8kc3RanxifUjVaUbNOCDleF5IIF2iuiqA7+l5Fibd2Y7mx0yqX/93PhRD3EggIBAQCAoHBIdBX4Ydpj1w8MaeljHEwtFARnvKf4lJDvLpCss5nP9yf5wMXBBuvmMAFH+4HgYjKARCAYBSiDBSIMtVy+W57qbruxp3nM1dxrUBAICAQEAj0B4G+C7/U8NDPCqMjt1GdxThehoRgUIu5kKGM/7jsE0/s7cfjdLPyVmPbYUxifMZVXHgZNkoe9aKajZSngxw/1P10vf3l6Vmi64pDICAQEAgIBP53Eei78GOmvmt4ZPRNWVNV5GuhNxWEC6jfyEnDAeECwUJVAVzvvNDjAmu9N4GLk+dBUVUGTaOUCMwxbgTLDFllrWbrhfL07B2ox7zescR1AgGBgEBAIHBhINB/4YdagaP5R3P5oSeQK4cKGIj3oUg4L5gMsglvTBh1FFv/kbTsull+q8X8olGjquGoFI7qInR+HOdDdRPfcpzyUukeN5Hns/7ZiisFAgIBgYBA4EJAYEOEHz1YVn98bHLyUUmSZDRnpBb21ObrTLuNCICNFX7v5/YMw4gNCgGI+aHTM4QzrL9mrf77aqNyF6vYfcstuRAWXcxBICAQEAj8vyOwccIPmcj57NUZM3OfljI+g47CesqQgiCQeNknCBxF5v3yzmsp2s/RrVRXfOfOjAv6OfCpKCuqbKA7eOC4zp9aLevVnGEeOD09/d55zUpcLBAQCAgEBAIXJAIbKvw6nlhnk1SZIz4mGWMz3UHxxzdmXoqyUgD6vjTOGJvH72dm3LW28rggV1JMSiAgEBAICATWjMDGCJk1Dy9OFAgIBAQCAgGBwOAREMJv8JiLEQUCAgGBgEBgkxEQwm+TF0AMLxAQCAgEBAKDR0AIv8FjLkYUCAgEBAICgU1GQAi/TV4AMbxAQCAgEBAIDB4BIfwGj7kYUSAgEBAICAQ2GQEh/DZ5AcTwAgGBgEBAIDB4BITwGzzmYkSBgEBAICAQ2GQEhPDb5AUQwwsEBAICAYHA4BEQwm/wmIsRBQICAYGAQGCTERDCb5MXQAwvEBAICAQEAoNHQAi/wWMuRhQICAQEAgKBTUbgP8EVYkOJBIXfAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default BookklubLogo;
