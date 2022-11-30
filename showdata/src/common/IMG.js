const IMG=({src,className,alt})=>{
    return(
        <div>
            <p>
                <img src={src} className={className} alt={alt}/>
            </p>
        </div>
    );
}
export default IMG;