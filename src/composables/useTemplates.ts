import { ref } from "vue";
import { getTemplates } from "../services/templatesService";
import type { Template } from "../types/Template";
import { generateRandomDate } from "./useDate";

export function useTemplate() {
  const templates = ref<Template[]>([]);
  const page = ref(1);
  const loading = ref(false);
  const hasMore = ref(true);

  const fetchTemplates = async () => {
    if (loading.value || !hasMore.value) return
    loading.value = true
  
    try {
      const response = await getTemplates(page.value)
      const newTemplates: Template[] = response.data.map((template: any) => ({
        ...template,
        createdAt: generateRandomDate(),
      }))
  
      if (newTemplates.length === 0) {
        hasMore.value = false
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800))
        templates.value.push(...newTemplates)
        page.value++
      }
    } catch (error) {
      console.error('Error al obtener templates:', error)
    } finally {
      loading.value = false
    }
  }

  return {
    templates,
    page,
    loading,
    hasMore,
    fetchTemplates,
  };
}
