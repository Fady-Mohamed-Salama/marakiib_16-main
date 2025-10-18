
export const initialState = {
  name: "",
  model: "",
  color: "red",
  engine_type: "ttt",
  rental_price: "",
  long_term_guarantee: true,
  pickup_delivery: true,
  isActive: true,
  plate_type: "",
  insurance_type: "",

  usage_nature: "",

  description: "",

  category_ids: "", // array للـ multiple
  category_slug: "", // احتفظ لو عايز single
  latitude: "24.7136",
  longitude: "46.6753",
  availability_start: "2025-09-01",
  availability_end: "2025-12-01",
  car_type_id: "1",
  selectedFeatures: {},
  featuresData: [],
  main_image: null,
  extra_images: [],
  termsAccepted: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_NAME_AR":
      return { ...state, nameAr: action.payload };
    // case "SET_MODEL":
    //   return { ...state, model: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_ENGINE_TYPE":
      return { ...state, engine_type: action.payload };
    case "SET_PLATE_TYPE":
      return { ...state, plate_type: action.payload };
    case "SET_RENTAL_PRICE":
      return { ...state, rental_price: action.payload };
    case "SET_AVAILABILITY_START":
      return { ...state, availability_start: action.payload };
    case "SET_AVAILABILITY_END":
      return { ...state, availability_end: action.payload };
    case "SET_LONG_TERM_GUARANTEE":
      return { ...state, long_term_guarantee: action.payload };
    case "SET_PICKUP_DELIVERY":
      return { ...state, pickup_delivery: action.payload };
    case "SET_IS_ACTIVE":
      return { ...state, isActive: action.payload };
    case "SET_INSURANCE_TYPE":
      return { ...state, insurance_type: action.payload };
    case "SET_INSURANCE_TYPE_AR":
      return { ...state, insurance_typeAr: action.payload };
    case "SET_USAGE_NATURE":
      return { ...state, usage_nature: action.payload };
    case "SET_USAGE_NATURE_AR":
      return { ...state, usage_natureAr: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_DESCRIPTION_AR":
      return { ...state, descriptionAr: action.payload };
    case "SET_CAR_TYPE_ID":
      return { ...state, car_type_id: action.payload };
    case "SET_CATEGORY_IDS":
      return { ...state, category_ids: action.payload }; // array
    case "SET_CATEGORY_SLUG":
      return { ...state, category_slug: action.payload };
    case "SELECT_FEATURE":
      return {
        ...state,
        selectedFeatures: {
          ...state.selectedFeatures,
          [action.payload.key]: action.payload.value,
        },
      };
    case "SET_FEATURES_DATA":
      return { ...state, featuresData: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_MAIN_IMAGE":
      return { ...state, main_image: action.payload };
    case "SET_EXTRA_IMAGES":
      return {
        ...state,
        extra_images: [...state.extra_images, ...action.payload],
      };
    case "SET_TERMS_ACCEPTED":
      return { ...state, termsAccepted: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
