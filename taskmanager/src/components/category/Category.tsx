import  './category.scss';

interface CategoryProps {
    label: string
    icon: string
    color?: string
}

export default function Category({label, icon, color} : CategoryProps) {
    return (
        
        <div className="category-item" style={{borderColor: color,}}>
            <div className="category-item-block">
                <i className={icon} style={{color: color}}></i>
                <p style={{color: color}}>{label}</p>
            </div>
        </div>
    )
}